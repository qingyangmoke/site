import React from 'react';
import { Row } from 'antd';
import { ComponentCard } from '../publicComponents';
import './cardGrid.less';


class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescList: [],
    };
  }

  handleClick = (name) => {
    const index = this.state.showDescList.indexOf(name);
    if (index >= 0) {
      this.setState({ showDescList: this.state.showDescList.filter(($, i) => index !== i) });
    } else {
      this.setState({ showDescList: [name] });
      // this.state.showDescList.splice(0, 0, name);
      // this.setState({ showDescList: this.state.showDescList });
    }
  }

  render() {
    const cardList = this.props.componentList.map(card =>
      (<ComponentCard component={card} key={card.name} onClick={this.handleClick} showDesc={this.state.showDescList.indexOf(card.name) === -1} />),
    );

    return (
      <div className="card-grid">
        <Row type="flex" >
          {cardList}
        </Row>
      </div>);
  }
}

CardGrid.propTypes = {
  componentList: React.PropTypes.array,
};
CardGrid.defaultProps = {
  componentList: [],
};
export default CardGrid;
