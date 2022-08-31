import React from 'react';

type Props = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  placeholder: string;
  label: string;
};

const Input = ({ handleChange, value, type, placeholder, label }: Props) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
