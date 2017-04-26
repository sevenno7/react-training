import { takeLatest, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { GET_PRODUCT, UPDATE_PRODUCT } from './constants';
import {
  getProductSuccess,
  getProductFailed,
  updateProductSuccess,
  updateProductFailed
} from './actions';
import products from '../data'

function getProductById(id) {
  return products.find(product => product.id === id);
}

function loadProduct(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const product = getProductById(id);
      res(product ? product : {})
    }, 1000)
  })
}

function saveProduct(editedProduct) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const originProduct = getProductById(editedProduct.id);
      if (originProduct) {
        originProduct.title = editedProduct.title
        originProduct.description = editedProduct.description
        originProduct.price = editedProduct.price

        resolve({
          ...originProduct,
          status: true
        })
      } else {
        reject({
          message: `Could not find product associated to ID: ${editedProduct.id}`,
          status: false
        })
      }
    }, 1000)
  })
}

export function* fetchProductById({ productId }) {
  try {
    const product = yield call(loadProduct, productId)
    yield put(getProductSuccess(product))
  } catch (e) {
    yield put(getProductFailed(e.message))
  }
}

function* updateProduct({ product }) {
  try {
    const updatedProduct = yield call(saveProduct, product)
    yield put(updateProductSuccess(updatedProduct))
  } catch (e) {
    yield put(updateProductFailed(e))
  }
}

export function* watchGetProduct() {
  yield* takeLatest(GET_PRODUCT, fetchProductById);
}

export function* watchUpdateProduct() {
  yield* takeEvery(UPDATE_PRODUCT, updateProduct)
}

export default [watchGetProduct, watchUpdateProduct];
