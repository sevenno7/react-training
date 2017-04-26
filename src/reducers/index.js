import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable'

import { LOCATION_CHANGE } from 'react-router-redux';
import { productListContainerReducer } from '../components/Product/List/reducers';
import { saveProduct } from '../components/Product/Create/reducers';

const routeInitialState = fromJS({
  location: null,
});

export function routerReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  products: productListContainerReducer,
  newProduct: saveProduct
});