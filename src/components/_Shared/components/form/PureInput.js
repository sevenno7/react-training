import React from 'react';

export default class PureInput extends React.Component {

  render() {
    const { type, ...rest } = this.props;
    return (
      <input type={type} {...rest} />
    )
  }
}
