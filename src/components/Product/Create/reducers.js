/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import { fromJS } from 'immutable';
import { SAVE_PRODUCT_SUCCEEDED, SAVE_PRODUCT_FAILED, LOAD_PAGE } from './constants';

const initialState = fromJS({
});


export const saveProduct = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE:
      return state.set('message', '');
    case SAVE_PRODUCT_SUCCEEDED:
      return state.set('message', action.message);
    case SAVE_PRODUCT_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
};