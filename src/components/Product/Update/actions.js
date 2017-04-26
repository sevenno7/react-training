import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCEEDED,
  GET_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCEEDED,
  UPDATE_PRODUCT_FAILED
} from './constants'

export function getProduct(productId) {
  return {
    type: GET_PRODUCT,
    productId
  };
}

export function getProductSuccess(product) {
  return {
    type: GET_PRODUCT_SUCCEEDED,
    product,
  };
}

export function getProductFailed(error) {
  return {
    type: GET_PRODUCT_FAILED,
    error,
  };
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}


export function updateProductSuccess(product) {
  return {
    type: UPDATE_PRODUCT_SUCCEEDED,
    product,
  };
}

export function updateProductFailed(error) {
  return {
    type: UPDATE_PRODUCT_FAILED,
    error,
  };
}