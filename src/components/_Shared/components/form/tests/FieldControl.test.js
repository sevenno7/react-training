/**
 * Created by nghiepnguyen on 4/27/2017.
 */
import React from 'react';
import { shallow } from 'enzyme';
import FormControl from '../FieldControl';
import PureInput from '../PureInput';

test('Should render input text field with class form-control', () => {
  const result = shallow(
    <FormControl type="text" meta={{}} />
  );

  expect(result.equals(<PureInput type="text" className="form-control" />)).toBe(true);
  expect(result.node.props.className).toEqual("form-control");
});

test('Should render input number field with class form-control', () => {
  const result = shallow(
    <FormControl type="number" meta={{}} />
  );

  expect(result.equals(<PureInput type="number" className="form-control" />)).toBe(true);
  expect(result.node.props.className).toEqual("form-control");
});

test('Should render textarea field with class form-control', () => {
  const result = shallow(
    <FormControl type="textarea" meta={{}} />
  );

  expect(result.equals(<textarea className="form-control" />)).toBe(true);
  expect(result.node.props.className).toEqual("form-control");
});

test('Should render input hidden field without class form-control', () => {
  const result = shallow(
    <FormControl type="hidden" meta={{}} />
  );

  expect(result.equals(<PureInput type="hidden"/>)).toBe(true);
  expect(result.node.props.className).not.toEqual("form-control");
});
