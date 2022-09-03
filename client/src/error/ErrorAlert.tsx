import React from 'react';

type Props = {
  error: string | null;
};

const ErrorAlert = ({ error }: Props) => {
  return <div>{error ? error : ''}</div>;
};

export default ErrorAlert;
