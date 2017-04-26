import React from 'react';
import { connect } from 'react-redux';

import CreateProduct from './components/CreateProduct';
import { saveProduct } from './actions';
import selectMessageContainer from './selectors'

class CreateProductContainer extends React.Component {

  handleSubmit = (values) => {
    this.props.saveProduct(values.toJS());
  };

  render() {
    return (
      <CreateProduct handleSubmit={this.handleSubmit} message={this.props.message} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveProduct: (product) => dispatch(saveProduct(product)),
  };
}

export default connect(selectMessageContainer, mapDispatchToProps) (CreateProductContainer);
