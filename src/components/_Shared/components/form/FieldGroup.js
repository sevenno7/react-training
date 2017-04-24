import React from 'react';
import  { Label, FieldControl } from './index'

export default class FieldGroup extends React.Component {

  render() {
    const { id, type, label, width = 10, ...rest} = this.props;

    return (
      <div className="form-group">
        <Label {...label} htmlFor={id}/>
        <div className={`col-sm-${width}`}>
          <FieldControl type={type} id={id} {...rest} />
        </div>
      </div>
    )
  }
}
