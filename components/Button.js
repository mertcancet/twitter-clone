import React from 'react';
import cx from 'classnames';

const Button = ({ primary, secondary, className, children, ...props }) => {
  console.log(className);
  return (
    <button
      className={cx('btn', {
        primary: primary,
        secondary: secondary,
        [className]: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
