/**
 * Created by nghiepnguyen on 4/28/2017.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Field } from 'redux-form/immutable';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { FieldGroup, Label } from '../../../components/_Shared'
import ProductForm from './ProductForm';

test('Should render Product form successfully with a message', () => {
  const handleSubmit = jest.fn();
  const mockStore = configureStore([]);
  const store = mockStore({});
  const message = "test message";

  const result = mount(
    <Provider store={store}>
      <ProductForm handleSubmit={handleSubmit} successMessage={message}/>
    </Provider>
  );

  expect(result.find("form.horizontal-form").length).toBe(1);
  expect(result.find("div.alert-success").length).toBe(1);
  expect(result.find("div.alert-success").text()).toMatch(message);
  // @TODO create more tests and verify all fields in form
});
