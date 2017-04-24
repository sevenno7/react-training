import React from 'react'
import PropTypes from 'prop-types'

import PureInput from './PureInput';

const FormControl = ({ type, input = {}, meta : { touched, error, warning }, ...props }) => {
  switch (type) {
    case 'hidden': {
      return (
        <PureInput type="hidden" {...input} {...props} />)
    }
    case 'text': {
      return (<PureInput type="text" className="form-control" {...input} {...props} />)
    }
    case 'number': {
      return (<PureInput type="number" className="form-control" {...input} {...props} />)
    }
    case 'textarea': {
      const { value, ...rest } = props;

      return (<textarea className="form-control"  {...input} {...rest}>
        {value}
      </textarea>)
    }
    default:
    {
      return <PureInput {...props}/>
    }
  }
}

FormControl.propTYpes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
}

export default FormControl