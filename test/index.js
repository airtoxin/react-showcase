import assert from 'assert';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StandardComponent from './StandardComponent';

import showcase, { defaultStyles } from '../src';

configure({ adapter: new Adapter() });

describe('showcase function', () => {
  let Wrapped;
  beforeEach(() => {
    Wrapped = showcase(StandardComponent);
  });

  it('should be a higher order component', () => {
    assert.strictEqual(shallow(<Wrapped />).contains(<StandardComponent />), true);
  });

  it("should have wrapped component's default props as a state", () => {
    assert.deepEqual(
      shallow(<Wrapped initialValue={132} />).state(),
      StandardComponent.defaultProps,
    );
  });
});

describe('Showcase component', () => {
  let Wrapped;
  beforeEach(() => {
    Wrapped = showcase(StandardComponent);
  });

  it('should have defaultProps and propTypes properties', () => {
    assert.deepEqual(Wrapped.defaultProps, {
      styles: defaultStyles,
    });
    assert.deepEqual(Object.keys(Wrapped.propTypes), ['styles']);
  });
});
