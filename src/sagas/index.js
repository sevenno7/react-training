import { watchRequestProducts } from '../components/Product/List/sagas';
import { fork } from 'redux-saga/effects';
import { watchSaveProduct } from '../components/Product/Create/saga';

export default function* root() {
    yield [
        fork(watchRequestProducts),
      fork(watchSaveProduct)
    ];
};