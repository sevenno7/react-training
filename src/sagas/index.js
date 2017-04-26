import { fork } from 'redux-saga/effects';

import { watchRequestProducts } from '../components/Product/List/sagas';
import { watchGetProduct, watchUpdateProduct } from '../components/Product/Update/sagas';
import { watchSaveProduct } from '../components/Product/Create/saga';


export default function* root() {
  yield [
    fork(watchRequestProducts),
    fork(watchGetProduct),
    fork(watchUpdateProduct),
    fork(watchSaveProduct),
  ];
};