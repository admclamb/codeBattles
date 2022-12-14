import React from 'react';
import styles from './Input.module.css';
type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  placeholder: string;
  label: string;
  name: string;
  title: string;
  pattern: string;
};

const Input = ({
  onChange,
  value,
  type,
  placeholder,
  label,
  name,
  title,
  pattern,
}: Props) => {
  // if (pattern) {
  //   return (
  //     <div className={styles.inputContainer}>
  //       <label htmlFor={label}>{label}</label>
  //       <input
  //         id={label}
  //         onChange={onChange}
  //         value={value}
  //         type={type}
  //         name={name}
  //         placeholder={placeholder}
  //         required={false}
  //         pattern={pattern}
  //         title={title}
  //       />
  //     </div>
  //   );
  // }
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        required={false}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
