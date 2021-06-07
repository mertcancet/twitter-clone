import React from 'react';
import cx from 'classnames';

const Button = ({ primary, secondary, className, children, ...props }) => {

  return (
    <button
      className={cx('btn', {
        'btn-primary': primary,
        'btn-secondary': secondary,
        [className]: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
