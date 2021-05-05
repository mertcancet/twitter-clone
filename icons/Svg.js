import React from 'react';
import cx from 'classnames';
const Svg = ({ children, className }) => {
  return (
    <svg viewBox='0 0 24 24' className={`fill-current ${className}`}>
      {children}
    </svg>
  );
};

export default Svg;
