import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { FieldGroup } from '../../../components/_Shared'

const validate = (values) => {
  const { id, title, description, price } = values.toJS();
  const errors = {}
  // TODO: implement code to validate form
  if (title && (title.trim().length === 0)) {

  }

  return errors;
}

class ProductForm extends React.Component {

  render() {
    const { handleSubmit, pristine, reset, submitting, successMessage } = this.props
    return (
      <form className="horizontal-form" onSubmit={handleSubmit}>

        {
          successMessage &&
          <div className="alert alert-success">
            <strong>Success!</strong> {successMessage}
          </div>
        }

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
                 placeholder="Enter your price here"
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