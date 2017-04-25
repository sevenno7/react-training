import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { REQUEST_PRODUCTS } from './constants';
import { requestProductsSuccess, requestProductsFailed } from './actions';
import products from '../data';

export function fetchProductsFromServer() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  })
}

function* fetchProducts() {
  try {
    const products = yield call(fetchProductsFromServer);
    yield put(requestProductsSuccess(products));
  } catch (e) {
    yield put(requestProductsFailed(e.message));
  }
}

export function* watchRequestProducts() {
  yield* takeLatest(REQUEST_PRODUCTS, fetchProducts);
}

export default [watchRequestProducts];