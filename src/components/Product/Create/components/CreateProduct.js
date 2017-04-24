/**
 * Created by nghiepnguyen on 4/24/2017.
 */
import React from 'react';
import { FieldGroup } from '../../../../components/_Shared'

class CreateProduct extends React.Component {
  state = {
    productTitle: 'Product Title'
  }

  onTitleChanged = (e) => {
    e.preventDefault();
    console.log('Title is changed');
    this.setState({
      productTitle: e.target.value
    })
  }

  render() {
    const { productTitle } = this.state;
    return (
      <form>
      <FieldGroup label="Title"
                  labelUnderscore={true}
                  type="input"
                  onChange={this.onTitleChanged}
                  value={productTitle}
                  placeholder="Enter your product title here"
      />
        <FieldGroup label="Description"
                    labelUnderscore={true}
                    type="textarea"
                    onChange={this.onTitleChanged}
                    value={productTitle}
                    placeholder="Enter your product title here"
        />
      </form>
    )
  }

}
export default CreateProduct;
