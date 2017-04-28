/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import { SAVE_PRODUCT, SAVE_PRODUCT_SUCCEEDED, SAVE_PRODUCT_FAILED, LOAD_PAGE } from './constants';

export const loadPage = () => {
  return {
    type: LOAD_PAGE,
  };
};

export const saveProduct = (product) => {
  return {
    type: SAVE_PRODUCT,
    product,
    message: '',
  };
};

export const saveProductSuccess = (message) => {
  return {
    type: SAVE_PRODUCT_SUCCEEDED,
    message,
  };
};

export const saveProductFailed = (error) => {
  return {
    type: SAVE_PRODUCT_FAILED,
    error
  };
};
