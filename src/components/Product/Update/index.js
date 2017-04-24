import React, { Component } from 'react';
import EditProductForm from '../_Partials/ProductForm';

class UpdateProductContainer extends Component {

  componentWillMount() {

  }

  render() {
    const { product = {id: 1, title: 'abcd'} } = this.state;
    return (
      <EditProductForm

        initialValues={{...product}}
      />
    );
  }
}

export default UpdateProductContainer;