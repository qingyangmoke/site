import React from 'react';
import { hashHistory, Router, Route, Redirect } from 'react-router';
import App from '../entry/homePage';
import { InnerDoc, InnerFrame, DocModal } from '../components/public/publicComponents';

import util from '../common/lib/util';
import tutorialMenu from '../../config/tutorial.yml';
import docsMenu from '../../config/docs.yml';
import examplesMenu from '../../config/examples.yml';
import toolsMenu from '../../config/tools.yml';
import pluginMenu from '../../config/plugins.yml';
import playgroundMenu from '../../config/playground.yml';

const tutorialHome = util.getTutorialHome(tutorialMenu);
const docsHome = util.getTutorialHome(docsMenu);
const examplesHome = util.getTutorialHome(examplesMenu);
const toolsHome = util.getTutorialHome(toolsMenu);
const playgroundHome = util.getTutorialHome(playgroundMenu);

const wrapInnerDoc = root => props => (<InnerDoc root={root} path={props.routeParams.splat} />);
const wrapInnerFrame = root => props => (<InnerFrame root={root} path={props.routeParams.splat} />);
const wrapDocModal = name => () => (<DocModal docModalVisible docModalLink={`${window.__DEV_ENV__ ? '/dist' : ''}/plugins/${name}/docs/index.html`} />);
const wrapDemoModal = name => () => (<DocModal docModalVisible docModalLink={`${window.__DEV_ENV__ ? '/dist' : ''}/plugins/${name}/demo/index.html`} />);

const PLUGINS = Object.keys(pluginMenu);
PLUGINS.shift();

const RouterConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Redirect from="/tutorial" to={`tutorial/${tutorialHome}`} />
    <Redirect from="/docs" to={`docs/${docsHome}`} />
    <Redirect from="/examples" to={`examples/${examplesHome}`} />
    <Redirect from="/tools" to={`tools/${toolsHome}`} />
    <Redirect from="/playground" to={`/playground/${playgroundHome}`} />

    <Route
      path="/tutorial"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/tutorialPage'));
        }, 'turorial');
      }}
    >
      <Route path="*" component={wrapInnerDoc('tutorial')} />
    </Route>

    <Route
      path="/docs"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/docsPage'));
        }, 'docs');
      }}
    >
      <Route path="*" component={wrapInnerDoc('docs')} />
    </Route>

    <Route
      path="/playground"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/playgroundPage'));
        }, 'playground');
      }}
    >
      <Route
        path=":name"
        getComponents={(location, callback) => {
          require.ensure([], (require) => {
            callback(null, {
              side: require('../entry/playgroundPage/sider'),
              layout: require('../entry/playgroundPage/playground'),
            });
          }, 'playground-one');
        }}
      />
      <Route
        path=":fatherName/:sonName"
        getComponents={(location, callback) => {
          require.ensure([], (require) => {
            callback(null, {
              side: require('../entry/playgroundPage/sider'),
              layout: require('../entry/playgroundPage/playground'),
            });
          }, 'playground-two');
        }}
      />
    </Route>

    <Route
      path="/examples"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/examplesPage'));
        }, 'examples');
      }}
    >
      <Route
        path=":demoName"
        getComponents={(location, callback) => {
          require.ensure([], (require) => {
            callback(null, {
              side: require('../entry/examplesPage/sider'),
              layout: require('../entry/examplesPage/demo'),
            });
          }, 'examples-demo');
        }}
      />
    </Route>

    <Route
      path="/plugins"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/pluginsPage'));
        }, 'plugins');
      }}
    >
      {
        PLUGINS.map(name => (<Route key={name} path={`${name}/docs`} component={wrapDocModal(name)} />))
      }
      {
        PLUGINS.map(name => (<Route key={name} path={`${name}/demo`} component={wrapDemoModal(name)} />))
      }
    </Route>

    <Route
      path="/tools"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/toolsPage'));
        }, 'tools');
      }}
    >
      <Route path="*" component={wrapInnerDoc('tools')} />
    </Route>

    <Route
      path="/blogs"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/blogsPage'));
        }, 'blogs');
      }}
    />

    <Route
      path="/blogs"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/blogDetailPage'));
        }, 'blogsDetail');
      }}
    >
      <Route path="*" component={wrapInnerDoc('blogs')} />
    </Route>

    <Route
      path="/wild"
      getComponents={(location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../entry/wildPage'));
        }, 'wild');
      }}
    >
      <Route path="*" component={wrapInnerDoc('wild')} />
    </Route>
  </Router >
);

export default RouterConfig;
