/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import {  SAVE_PRODUCT } from './constants';
import { saveProductSuccess, saveProductFailed } from './actions';

export const getProducts = (state) => {
  return state.get('products').toJS().products;
};
function createProduct(product) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = {
        productId : new Date().getTime(),
        message: `Saved product with title '${product.title}' successfully.`
      };
      res(result);
    }, 1000);
  })
}


function* saveProduct(action) {
  try {
    const result = yield call(createProduct, action.product);
    action.product.id = result.productId;

    const products = yield select(getProducts);
    console.log('BEFORE-', products);
    products.push(action.product);
    console.log('productsproductsproductsproductsproducts-', products);
    yield put(saveProductSuccess(result.message));
  } catch (e) {
    console.error(e);
    yield put(saveProductFailed(e.message));
  }
}

export function* watchSaveProduct() {
  yield* takeLatest(SAVE_PRODUCT, saveProduct);
}

export default [watchSaveProduct];