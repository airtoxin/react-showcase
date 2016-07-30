import React from 'react';

export const defaultStyles = {
  article: {
    margin: "20px 20px 40px 20px",
    display: "flex",
    flexDirection: "column"
  },
  componentDiv: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10
  },
  componentLabel: {
    marginLeft: -10,
    width: "100%"
  },
  propsDiv: {},
  propsLabel: {},
  propsUl: {
    marginTop: -3
  },
  propsLi: {},
  propsInput: {}
};

export default function showcase(Component) {
  const defaultProps = Component.defaultProps || {};

  return class Showcase extends React.Component {
    constructor() {
      super();
      this.state = defaultProps;
    }

    render() {
      const Props = Object.keys(defaultProps).map(key => (
        <li key={key} style={defaultStyles.propsLi}>{key}: <input
          style={defaultStyles.propsInput}
          type="text"
          placeholder={`${key}=${defaultProps[key]}`}
          value={this.state[key]}
          onChange={e => this.setState({ [key]: e.target.value })}
        /></li>
      ));

      return (
        <article style={defaultStyles.article}>
          <div style={defaultStyles.componentDiv}>
            <label style={defaultStyles.componentLabel}>{Component.name}</label>
            <Component {...this.state} />
          </div>
          <div style={defaultStyles.propsDiv}>
            <label style={defaultStyles.propsLabel}>props</label>
            <ul style={defaultStyles.propsUl}>{Props}</ul>
          </div>
        </article>
      );
    }
  };
}
