import React from 'react';

export default function showcase(Component) {
  const defaultProps = Component.defaultProps || {};

  return class Showcase extends React.Component {
    constructor() {
      super();
      this.state = defaultProps;
    }

    render() {
      const Props = Object.keys(defaultProps).map(key => (
        <input
          key={key}
          type="text"
          placeholder={`${key}=${defaultProps[key]}`}
          value={this.state[key]}
          onChange={e => this.setState({ [key]: e.target.value })}
        />
      ));

      return (
        <div>
          <h3>{Component.name}</h3>
          <Component {...this.state} />
          <label>props</label>
          {Props}
        </div>
      );
    }
  };
}
