import React from 'react';

const Label = (props) => {
  const { label, underscore } = props;
  return (
    <label style={{textDecoration: `${underscore ? 'underscore': ''}`}} >{props.label}</label>
  )
};

export default Label;
