import React, { PropTypes } from 'react';

export const defaultStyles = {
  article: {
    margin: '20px 20px 40px',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    border: 'dashed 2px gray',
  },
  componentDiv: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  componentLabel: {
    marginLeft: -15,
    marginTop: -30,
    width: '100%',
  },
  propsDiv: {},
  propsLabel: {},
  propsUl: {},
  propsLi: {},
  propsInput: {},
};

export default function showcase(Component) {
  const defaultProps = Component.defaultProps || {};

  class Showcase extends React.Component {
    constructor(props) {
      super(props);
      this.state = defaultProps;
    }

    render() {
      const style = this.props.styles;

      const Props = Object.keys(defaultProps).map(key => (
        <li key={key} style={style.propsLi}>{key}: <input
          style={style.propsInput}
          type="text"
          placeholder={`${key}=${defaultProps[key]}`}
          value={this.state[key]}
          onChange={e => this.setState({ [key]: e.target.value })}
        />
        </li>
      ));

      return (
        <article style={style.article}>
          <label style={style.componentLabel}>{Component.name}</label>
          <div style={style.componentDiv}>
            <Component {...this.state} />
          </div>
          <div style={style.propsDiv}>
            <label style={style.propsLabel}>props</label>
            <ul style={style.propsUl}>{Props}</ul>
          </div>
        </article>
      );
    }
  }

  Showcase.propTypes = {
    styles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };
  Showcase.defaultProps = {
    styles: defaultStyles,
  };

  return Showcase;
}
