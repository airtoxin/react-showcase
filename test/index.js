import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import StandardComponent from './StandardComponent';

import showcase from '../src/index.js';

describe('showcase', () => {
  it('should be a higher order component', () => {
    const Wrapped = showcase(StandardComponent);
    assert.strictEqual(shallow(<Wrapped />).contains(<StandardComponent />), true);
  });

  it("should have wrapped component's default props as a state", () => {
    const Wrapped = showcase(StandardComponent);
    assert.deepEqual(
      shallow(<Wrapped initialValue={132} />).state(),
      StandardComponent.defaultProps
    );
  });
});
