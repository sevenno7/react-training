import { REQUEST_PRODUCTS, REQUEST_PRODUCTS_SUCCEEDED, REQUEST_PRODUCTS_FAILED } from './constants';

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function requestProductsSuccess(products) {
  return {
    type: REQUEST_PRODUCTS_SUCCEEDED,
    products,
  };
}

export function requestProductsFailed(message) {
  return {
    type: REQUEST_PRODUCTS_FAILED,
    message,
  };
}