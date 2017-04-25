import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditProductForm from '../_Partials/ProductForm'
import { getProduct, updateProduct } from './actions'

class UpdateProductContainer extends Component {

  componentWillMount() {
    const { productId, getProduct } = this.props
    getProduct(Number(productId))
  }

  handleSubmitEditedProduct = (values) => {
    const product = values.toJS()
    this.props.updateProduct(product)

    // TODO: Redirect to product list page
  }

  render() {
    const { productInfo } = this.props
    const { request } = productInfo
    if (request && request.isFetching) {
      return (<div>Fetching Product Information</div>)
    }

    if (request && !request.isFetching && !request.isSuccess) {
      return (<div><strong>Error</strong>: Could not fetch product information</div>)
    }

    return (
      <EditProductForm
        initialValues={{...productInfo.product}}
        onSubmit={this.handleSubmitEditedProduct}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const location = state.get('router').get('location').toJS()
  const [ moduleId, actionName, parameter, ...others ] = location.pathname.split(/\//).slice(1)

  return {
    productId: parameter,
    productInfo: state.get('product').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(getProduct(productId)),
    updateProduct: (product) => dispatch(updateProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProductContainer);