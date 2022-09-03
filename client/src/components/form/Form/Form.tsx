import React, { ReactNode } from 'react';
import { FormContext } from '../../../context/FormContext';
import Input from '../Input/Input';
import styles from './Form.module.css';
type Props = {
  data: {};
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  submitText: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

/*
 * Form component that is created from an object.
 *
 * Params:
 * @data: object used to create the form
 * @children: additional inputs that are not a part of the original object
 * @submitText: change the text value of the submit form
 * @footer: append a react element at the footer of the form
 */
const Form = ({
  data,
  onChange,
  onSubmit,
  submitText,
  children,
  footer,
}: Props) => {
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
        type={item === 'password' ? 'password' : 'text'}
      />
    );
    inputElements.push(inputElement);
  }
  return (
    <form onSubmit={onSubmit}>
      {inputElements}
      {children}
      <button
        type="submit"
        className={`button button-primary ${styles.button}`}
      >
        {submitText}
      </button>
      {footer}
    </form>
  );
};

Form.defaultProps = {
  submitText: 'Submit',
};

export default Form;
