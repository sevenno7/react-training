import React from 'react';
import Label from './Label';
import PureInput from './PureInput';

export default class FieldGroup extends React.Component {

  render() {
    const { type, label, labelUnderscore, ...rest} = this.props;

    return (
      <div className="form-group">
        <Label label={label} underscore={labelUnderscore}/>
        <PureInput type={type} {...rest} />
      </div>
    )
  }
}
