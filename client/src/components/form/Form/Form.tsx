import React, { ReactNode } from 'react';
import { FormContext } from '../../../context/FormContext';
import Input from '../Input/Input';

type Props = {
  data: {};
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ data, onChange, onSubmit }: Props) => {
  const inputElements = [];
  console.log(data);
  for (const item in data) {
    const value = data[item] || '';
    const inputElement = (
      <Input
        name={item}
        value={value}
        label={item}
        placeholder={item}
        onChange={onChange}
      />
    );
    inputElements.push(inputElement);
  }
  return <form onSubmit={onSubmit}>{inputElements}</form>;
};

export default Form;
