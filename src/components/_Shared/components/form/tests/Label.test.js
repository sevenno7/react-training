/**
 * Created by nghiepnguyen on 4/27/2017.
 */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Label from '../Label';


test('Should render label with default width', () => {
   const label2 = shallow(
    <Label label="test-label"/>
  );
  expect(label2.type()).toEqual("label");
  expect(label2.text()).toEqual("test-label");
  expect(label2.props().className).toEqual("control-label col-sm-2");
});

test('Should render label with a width', () => {
  const width = 5;
  const label2 = shallow(
    <Label label="label5" width={width}/>
  );
  expect(label2.type()).toEqual("label");
  expect(label2.text()).toEqual("label5");
  expect(label2.props().className).toEqual(`control-label col-sm-${width}`);
});