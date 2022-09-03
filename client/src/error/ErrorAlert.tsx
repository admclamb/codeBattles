import React from 'react';
import styles from './ErrorAlert.module.css';
type Props = {
  error: string | null;
};

const ErrorAlert = ({ error }: Props) => {
  return (
    error && (
      <div className={styles.container}>
        <p>Error: {error?.message}</p>
      </div>
    )
  );
};

export default ErrorAlert;
