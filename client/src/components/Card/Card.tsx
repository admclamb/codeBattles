import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
  padding: string;
  border: string;
  borderRadius: string;
};

const Card = ({ children, classes, padding, border, borderRadius }: Props) => {
  return (
    <article className={`${padding} ${border} ${borderRadius} ${classes}`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  classes: '',
  padding: 'p-3',
  border: 'border dark:border-slate-50/[0.06]',
  borderRadius: 'rounded',
};

export default Card;
