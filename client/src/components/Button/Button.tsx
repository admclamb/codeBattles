import React from 'react';
import Link from 'next/link';
type Props = {
  type: string;
  link: string;
  children: React.ReactNode;
  classes: string;
  handleClick: () => void;
};

const Button = ({ type, link, children, classes, handleClick }: Props) => {
  return type === 'link' ? (
    <Link href={link} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={`${classes}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  classes: '',
  type: 'button',
  link: '/',
  handleClick: () => {},
};

export default Button;
