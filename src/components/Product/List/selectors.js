import { createSelector } from 'reselect';

const selectProducts = state => state.get('products');

const selectListProductContainer = createSelector(selectProducts, products => ({ products: products.toJS().products }));

export default selectListProductContainer;