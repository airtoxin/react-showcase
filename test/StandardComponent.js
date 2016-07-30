import React from 'react';

export default class StandardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  render() {
    return (
      <h1 onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count: {this.state.count}
      </h1>
    );
  }
}

StandardComponent.propTypes = {
  initialValue: React.PropTypes.number,
};

StandardComponent.defaultProps = {
  initialValue: 1,
};
