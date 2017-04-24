import { fromJS } from 'immutable';

import { GET_PRODUCT_SUCCEEDED } from './constants';

const initialState = fromJS({
  product: {}
});

export function UpdateProductContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_SUCCEEDED:
      return state.set('product', action.product);
    default:
      return state;
  }
}