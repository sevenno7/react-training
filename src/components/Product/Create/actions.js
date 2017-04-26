/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import { SAVE_PRODUCT, SAVE_PRODUCT_SUCCEEDED, SAVE_PRODUCT_FAILED } from './constants';

export const saveProduct = (product) => {
  return {
    type: SAVE_PRODUCT,
    product
  }
};

export const saveProductSuccess = (message) => {
  return {
    type: SAVE_PRODUCT_SUCCEEDED,
    message
  }
};

export const saveProductFailed = (message) => {
  return {
    type: SAVE_PRODUCT_FAILED,
    error: message
  }
};
