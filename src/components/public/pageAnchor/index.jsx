import React from 'react';
import Contents from 'contents';
import { Anchor } from 'antd';
import ep from '../../../common/lib/ep';

const { Link } = Anchor;

Contents.link = () => { };

class PageAnchor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tree: [],
    };
  }

  componentDidMount() {
    ep.on('doc', () => {
      const articles = document.querySelectorAll('#doc h2, #doc h3');
      let tree = null;
      if (articles.length > 0) {
        tree = Contents({
          articles,
        }).tree();
      }
      this.setState({
        tree,
      });
    });
  }

  componentWillUnmount() {
    ep.unbind('doc');
  }

  render() {
    const { tree } = this.state;
    if (tree) {
      return (
        <Anchor affix offsetTop={80}>
          {tree.map(node => (node.descendants && node.descendants.length) ?
            (<Link href={`#${node.id}`} title={node.name} key={node.id}>
              {node.descendants.map(subNode =>
                <Link href={`#${subNode.id}`} title={subNode.name} key={subNode.id} />
              )}</Link>) :
            <Link href={`#${node.id}`} title={node.name} key={node.id} />)
          }
        </Anchor>
      );
    }
    return null;
  }
}

export default PageAnchor;
