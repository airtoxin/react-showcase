import React, { PropTypes } from 'react';

export default class StandardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count: {this.state.count}
      </button>
    );
  }
}

StandardComponent.propTypes = {
  initialValue: PropTypes.number,
};

StandardComponent.defaultProps = {
  initialValue: 1,
};
