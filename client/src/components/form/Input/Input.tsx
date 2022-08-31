import React from 'react';

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  placeholder: string;
  label: string;
  name: string;
};

const Input = ({ onChange, value, type, placeholder, label, name }: Props) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
