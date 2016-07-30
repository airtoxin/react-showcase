import React from 'react';

export default function showcase(Component) {
  return class Showcase extends React.Component {
    constructor() {
      super();
      this.state = Component.defaultProps;
    }

    render() {
      const Props = Object.entries(Component.defaultProps).map(([key, value]) => (
        <input
          key={key}
          type="text"
          placeholder={`${key}=${value}`}
          value={this.state[key]}
          onChange={e => this.setState({ [key]: e.target.value })}
        />
      ));

      return (
        <div key={Component.name}>
          <h3>{Component.name}</h3>
          <Component {...this.state} />
          <label>props</label>
          {Props}
        </div>
      );
    }
  };
}
