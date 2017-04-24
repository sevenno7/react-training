import React from 'react';

const Label = (props) => {
  const { label, width = 2, ...rest } = props;
  return (
    <label className={`control-label col-sm-${width}`} {...rest}>{props.label}</label>
  )
};

export default Label;
