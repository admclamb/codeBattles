import React from 'react';
import Link from 'next/link';
import Button from '../Button';

type Props = {
  type: string;
  link: string;
  children: React.ReactNode;
  classes: string;
};

const ButtonDefault = ({ type, link, children, classes }: Props) => {
  return (
    <Button
      type={type}
      link={link}
      classes={`px-3 py-2 border  dark:border-slate-50/[0.06] hover:brightness-70 ${classes}`}
    >
      {children}
    </Button>
  );
};

ButtonDefault.defaultProps = {
  classes: '',
  type: 'button',
  link: '/',
};

export default ButtonDefault;
