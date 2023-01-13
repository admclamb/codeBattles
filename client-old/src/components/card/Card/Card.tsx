import React from 'react';
import styles from './Card.module.css';
type Props = {
  children: React.ReactNode;
  containerName: string;
};

const Card = ({ children, containerName }: Props) => {
  return (
    <article className={`${containerName} ${styles.card}`}>{children}</article>
  );
};

Card.defaultProps = {
  containerName: 'card',
};

export default Card;
