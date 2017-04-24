import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { FieldGroup } from '../../../components/_Shared'

const validate = (values) => {

}

class ProductForm extends React.Component {

  render() {
    const {productTitle, productDescription } = this.props
    return (
      <form className="horizontal-form">
        <div className="row">
          <FieldGroup
            type="text"
            label={{ label: 'Product Title', width: 2 }}
            id="product-title"
            onChange={() => {}}
            value={productTitle}
            placeholder="Enter your product title here"
          />
        </div>
        <div className="row">
          <FieldGroup
            type="textarea"
            label={{ label: 'Description', width: 2 }}
            id="product-title"
            onChange={() => {}}
            value={productDescription}
            placeholder="Enter your description here"
          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form : 'createOrEditProductForm',
  validate
})(ProductForm);