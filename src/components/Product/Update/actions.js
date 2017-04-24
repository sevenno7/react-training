import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCEEDED,
  GET_PRODUCT_FAILED
} from './constants'

export function getProduct() {
  return {
    type: GET_PRODUCT,
  };
}

export function getProductSuccess(product) {
  return {
    type: GET_PRODUCT_SUCCEEDED,
    product,
  };
}

export function getProductFailed(message) {
  return {
    type: GET_PRODUCT_FAILED,
    message,
  };
}