/**
 * Created by nghiepnguyen on 4/27/2017.
 * https://facebook.github.io/jest/docs/expect.html#content
 * https://facebook.github.io/jest/docs/api.html#content
 * http://airbnb.io/enzyme/docs/api/ShallowWrapper/children.html
 */
import React from 'react';
import { shallow } from 'enzyme';
import FieldGroup from '../FieldGroup';
import FieldControl from '../FieldControl';
import Label from '../Label';

test('It should render a text field with a label field', () => {
  const result = shallow(
    <FieldGroup type="text" label={{ label: 'Product Title'}} id={1} />
  );

  expect(result.find('div.form-group').length).toBe(1);
  expect(result.contains(<Label label="Product Title" htmlFor={1}/>)).toBe(true);
  expect(result.contains(<FieldControl type="text" id={1} />)).toBe(true);
});

test('It should render a hidden field without label field', () => {
  const result = shallow(
    <FieldGroup type="hidden" label={{ label: 'Product Title'}} id={1} />
  );

  expect(result.find('div.form-group').length).not.toBe(1);
  expect(result.find('div.form-group').length).toBe(0);
  expect(result.contains(<Label label="Product Title" htmlFor={1}/>)).toBe(false);
  expect(result.contains(<FieldControl type="hidden" id={1} />)).toBe(true);
});