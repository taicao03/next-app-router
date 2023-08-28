import React from 'react';
import PropTypes from 'prop-types';

export default function Images({ alt, src, className }) {
  return <img className={className} src={`/images/${src}`} alt={alt} />;
}

Images.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};
