/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import React from 'react';
import { FieldGroup } from '../../../../components/_Shared'

class CreateProduct extends React.Component {
  state = {
    productTitle: 'Product Title',
    productDes: 'Some text'
  }

  onTitleChanged = (e) => {
    e.preventDefault();
    this.setState({
      productTitle: e.target.value
    })
  }

  render() {
    const { productTitle, productDes } = this.state;
    return (
      <div className="container">
        <form className="horizontal-form">
          <FieldGroup
            type="text"
            label={{ label: 'Product Title', width: 2 }}
            id="product-title"
            onChange={this.onTitleChanged}
            value={productTitle}
            placeholder="Enter your product title here"
          />
          <FieldGroup
            type="textarea"
            label={{ label: 'Description', width: 2 }}
            id="product-title"
            onChange={this.onTitleChanged}
            value={productDes}
            placeholder="Enter your description here"
          />
        </form>
      </div>
    )
  }

}
export default CreateProduct;
