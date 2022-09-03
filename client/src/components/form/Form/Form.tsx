import React, { ReactNode } from 'react';
import { FormContext } from '../../../context/FormContext';
import Input from '../Input/Input';
import styles from './Form.module.css';
type Props = {
  data: {};
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  submitText: string;
};

const Form = ({ data, onChange, onSubmit, submitText }: Props) => {
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
  return (
    <form onSubmit={onSubmit}>
      {inputElements}
      <button
        type="submit"
        className={`button button-primary ${styles.button}`}
      >
        {submitText}
      </button>
    </form>
  );
};

Form.defaultProps = {
  submitText: 'Submit',
};

export default Form;
