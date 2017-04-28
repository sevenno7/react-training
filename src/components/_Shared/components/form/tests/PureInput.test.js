/**
 * Created by nghiepnguyen on 4/27/2017.
 */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PureInput from '../PureInput';

describe('Test <PureInput />', () => {
  test.skip('Render text input correctly by using shallow', () => {
    const input = shallow(
      <PureInput type="text"/>
    );
    console.log(input);
    expect(input.equals(<input type="text"/>));
  });

  test('Render text input correctly by using renderer', () => {
    const input = renderer.create(
      <PureInput type="text"/>
    ).toJSON();
    expect(input.type).toBe('input');
    expect(input.props.type).toBe('text');
  });
});
