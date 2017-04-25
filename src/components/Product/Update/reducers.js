import { fromJS } from 'immutable';

import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCEEDED,
  GET_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCEEDED,
  UPDATE_PRODUCT_FAILED
} from './constants';

const initialState = fromJS({
  product: {}
});

export function updateProductContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return state.set('request', { isFetching: true, isSuccess: false })

    case GET_PRODUCT_SUCCEEDED:
      const nextState = state.set('product', action.product);

      return nextState.set('request', { isFetching: false, isSuccess: true })

    case GET_PRODUCT_FAILED:
      return state.set('request', { isFetching: false, isSuccess: false, message: action.message })

    case UPDATE_PRODUCT_SUCCEEDED:
      return state.set('product', action.product);
    case UPDATE_PRODUCT_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
}