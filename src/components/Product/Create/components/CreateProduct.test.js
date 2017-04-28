/**
 * Created by nghiepnguyen on 4/27/2017.
 */
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ProductForm from '../../_Partials/ProductForm';
import CreateProduct from './CreateProduct';

test('render Create Product form correctly with a message', () => {
  const handleSubmit = jest.fn();
  const message = "This is a test message";
  const mockStore = configureStore([]);
  const store = mockStore({});
  
  const form = mount(
    <Provider store={store} >
      <CreateProduct handleSubmit={handleSubmit} message={message}/>
    </Provider>
  );

  expect(form.find("div.container").length).toBe(1);
  expect(form.contains(<ProductForm onSubmit={handleSubmit} successMessage={message} />)).toBe(true);
});