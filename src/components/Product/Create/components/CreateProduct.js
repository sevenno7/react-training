/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import React from 'react';
import ProductForm from '../../_Partials/ProductForm'

class CreateProduct extends React.Component {

  handleSubmit = (values) => {
    console.log('Product Title: ', values.get('productTitle'));
  }

  render() {
    return (
      <div className="container">
        <ProductForm
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }

}
export default CreateProduct;
