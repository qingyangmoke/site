# define variable
externalResources = config/external_resources.yml
siteGitHub        = https://github.com/ant-tinyjs/site.git
siteGitLab        = git@gitlab.alibaba-inc.com:tiny/site.git
tinyGit           = git@gitlab.alipay-inc.com:tiny/tiny.git
playgroundGit     = git@gitlab.alipay-inc.com:tiny/playground.git
examplesGit       = `sh scripts/parse_yaml.sh ${externalResources} | grep -E "(git)_(examples)" | awk -F "=" '{print $$2}'`
pluginGit         = $(shell sh scripts/parse_yaml.sh ${externalResources} | grep -E "(git)_(plugin)" | awk -F "=" '{print $$2}')
tinyDir           = .tiny_source_code
playgroundDir			= .tiny_playground
examplesDir       = .tiny_examples
pluginsDir        = .tiny_plugins
downloadUrl       = $(firstword $(subst ^, ,$1))
downloadName      = $(word 2,$(subst ^, ,$1))

fire_tiny:
	@echo "️☕  ️此过程耗时较长，请耐心等等..."
	@rm -rf ${tinyDir} && git clone ${tinyGit} ${tinyDir} && \
	cd ${tinyDir} && tnpm install --silent > npminstall.log && make doc && make build && cp -R docs ../dist && mv dist ../dist/libs
	@rm -rf ${tinyDir}

fire_example:
	@rm -rf ${examplesDir} && mkdir ${examplesDir} && \
	for item in ${examplesGit}; do \
    echo "☕️  准备从 $$item 拉取示例源码"; \
    cd ${examplesDir} && git clone $$item && cd ..; \
  done
# 删除示例中所有的 .git
	@cd ${examplesDir} && rm -rf **/.git
# 移动示例临时文件夹到 dist/examples 下
	@rm -rf dist/examples && mv ${examplesDir} dist/examples

fire_playground:
	@rm -rf ${playgroundDir} && git clone ${playgroundGit} ${playgroundDir} && \
	cd ${playgroundDir} && tnpm install --silent > npminstall.log && tnpm run build && mv dist ../dist/playground
	@rm -rf ${playgroundDir}

fire_plugin:
	@rm -rf dist/plugins ${pluginsDir} && mkdir ${pluginsDir}
	@$(foreach item,$(pluginGit), \
	url=$(call downloadUrl,$(item)); \
	name=$(call downloadName,$(item)); \
	cd ${pluginsDir} && curl -L $$url > $$name.tar.gz && tar xvf $$name.tar.gz && for var in *$$name*; do mv -f $$var $$name; done; \
	cd ../${pluginsDir}/$$name && tnpm install && tnpm run build && tnpm run doc; \
	mkdir -p ../../dist/plugins/$$name; \
	cp -r docs demo dist ../../dist/plugins/$$name && cd ../..; \
	)
	@rm -rf ${pluginsDir}

install:
	@tnpm install

build:
	@tnpm run build

server:
	@tnpm run start

publish:
	@rm -rf dist && mkdir dist
	@echo "---\n[1] 通过 make build 执行编译\n---"
	@${MAKE} build
	@echo "---\n[2] 从远程拉取 Tiny.js 源码，并执行编译和生成 API 文档\n---"
	@${MAKE} fire_tiny
	@echo "---\n[3] 从远程拉取 Tiny.js 示例源码，并移动到 dist/examples\n---"
	@${MAKE} fire_example
	@echo "---\n[4] 从远程拉取 Tiny.js 插件源码，并移动到 dist/plugins\n---"
	@${MAKE} fire_plugin
	@echo "---\n[5] 从远程拉取 Tiny.js Playground，并移动到 dist/playground\n---"
	@${MAKE} fire_playground

deploy:
	@echo "---\n[1] 创建 CNAME 文件\n---"
	@echo tinyjs.net > dist/CNAME
	@echo "---\n[2] 将编译后的资源推送到远程 gh-pages 分支\n---"
	@cd dist && rm -rf .git &&\
	git init && \
	git remote add origin ${siteGitHub} && \
	git checkout -b gh-pages && \
	git add -A . && \
	git commit -am 'auto build and commit for gh-pages' && \
	git push --force origin gh-pages

deploy-inner:
	@echo "---\n[1] 将编译后的资源推送到内网环境\n---"
	@cd dist && rm -rf .git &&\
	git init && \
	git remote add origin ${siteGitLab} && \
	git add -A . && \
	git commit -am 'auto build and commit' && \
	git push --force origin master
