import React from 'react';
import { connect } from 'react-redux';

import CreateProduct from './components/CreateProduct';
import { saveProduct, loadPage } from './actions';
import selectMessageContainer from './selectors'

class CreateProductContainer extends React.Component {

  componentWillMount() {
    this.props.loadPage();
  }

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
    loadPage: () => dispatch(loadPage())
  };
}

export default connect(selectMessageContainer, mapDispatchToProps) (CreateProductContainer);
