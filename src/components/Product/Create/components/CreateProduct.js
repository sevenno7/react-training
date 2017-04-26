/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../../_Partials/ProductForm'

class CreateProduct extends React.Component {

  render() {
    const { handleSubmit, message } = this.props;
    return (
      <div className="container">
        <ProductForm
          onSubmit={handleSubmit}
          successMessage={message}
        />
      </div>
    )
  }

}

CreateProduct.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default CreateProduct;
