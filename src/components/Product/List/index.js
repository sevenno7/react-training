import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from './components/ProductList';
import selectListProductContainer from './selectors';
import { requestProducts } from './actions';

class ListProductContainer extends Component {

    componentWillMount() {
        this.props.requestProducts();
    }

    render() {
        return (
            <section className="container-fluid">
                {this.props.products.length === 0 ? <span>nothing was found</span> : <ProductList {...this.props} />}
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestProducts: () => dispatch(requestProducts()),
    };
}

export default connect(selectListProductContainer, mapDispatchToProps)(ListProductContainer);
