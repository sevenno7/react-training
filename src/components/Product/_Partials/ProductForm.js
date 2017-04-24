import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { FieldGroup } from '../../../components/_Shared'

const validate = (values) => {
  const errors = {}
  // TODO: implement code to validate form
  const productTitle = values.get('productTitle');
  if (productTitle && (productTitle.trim().length === 0) ) {

  }

  return errors;
}

class ProductForm extends React.Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form className="horizontal-form" onSubmit={handleSubmit}>
        <Field component={FieldGroup}
               name="id"
               type="hidden"
        />
        <div className="row margin-top-md">
          <Field component={FieldGroup}
                 name="title"
                 type="text"
                 label={{ label: 'Product Title', width: 2 }}
                 id="product-title"
                 placeholder="Enter your product title here"
          />
        </div>
        <div className="row margin-top-md">
         <Field component={FieldGroup}
                name="description"
                type="textarea"
                label={{ label: 'Description', width: 2 }}
                id="product-description"
                placeholder="Enter your description here"
         />
        </div>
        <div className="row margin-top-md">
          <Field component={FieldGroup}
                 name="price"
                 type="number"
                 label={{ label: 'Price', width: 2 }}
                 id="product-price"
                 placeholder="Enter your description here"
          />
        </div>
        <div className="row margin-top-md text-center">
          <button type="submit"
                  disabled={submitting}
                  className="btn btn-md btn-success margin-right-md">
            Save
          </button>
          <button type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                  className="btn btn-md btn-danger">
            Clear
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form : 'createOrEditProductForm',
  validate
})(ProductForm);