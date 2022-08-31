import React from 'react';
import { FormContext } from '../../../context/FormContext';

type Props = {
  children: React.ReactNode;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ children, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={}>{children}</FormContext.Provider>
    </form>
  );
};

export default Form;
