import { watchRequestProducts } from '../components/Product/List/sagas';
import { fork } from 'redux-saga/effects';

export default function* root() {
    yield [
        fork(watchRequestProducts)
    ];
};