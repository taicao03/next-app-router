import React from 'react';

export default function Images({ alt, src, className }) {
  return <img className={className} src={`/images/${src}`} alt={alt} />;
}
