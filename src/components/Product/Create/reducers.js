/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import { fromJS } from 'immutable';
import { SAVE_PRODUCT_SUCCEEDED, SAVE_PRODUCT_FAILED } from './constants';

const initialState = fromJS({
  message: ''
});


export const saveProduct = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCT_SUCCEEDED:
      return state.set('message', action.message);
    case SAVE_PRODUCT_FAILED:
      return state.set('error', action.error)
    default:
      return state;
  }
};