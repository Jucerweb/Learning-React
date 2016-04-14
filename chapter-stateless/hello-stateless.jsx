import React from 'react';

const HelloStateless = props => {
  return (
    <small> Hello {props.caption}! </small>
  );
};

HelloStateless.propTypes = {
  caption: React.PropTypes.string
};

HelloStateless.defaultProps = {
  caption: ''
};

export default HelloStateless;
