import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { GET_PRODUCT } from './constants';
import { getProductSuccess, getProductFailed } from './actions';
import products from '../data'

export function loadProduct(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const product = products.find(product => product.id === id)
      res(product ? product : {})
    }, 1000)
  })
}


function* fetchProductById(productId) {
  try {
    const product = yield call(loadProduct, productId)
    yield put(getProductSuccess(product))
  } catch (e) {
    yield put(getProductFailed(e.message))
  }
}


export function* watchGetProduct() {
  yield* takeLatest(GET_PRODUCT, fetchProductById);
}

export default [watchGetProduct];