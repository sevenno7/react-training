import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { REQUEST_PRODUCTS } from './constants';
import { requestProductsSuccess, requestProductsFailed } from './actions';

export function fetchProductsFromServer() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const products = [
                {
                    id: 1,
                    title: 'Product title 1',
                    description: 'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                    price: '$21.000'
                },
                {
                    id: 2,
                    title: 'Product title 2',
                    description: 'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                    price: '$21.000'
                },
            ];
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