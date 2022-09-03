import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from '../../components/form/Form/Form';
import { User } from '../../ts/interfaces/User';
import styles from './Signup.module.css';
const Signup = () => {
  const [signup, setSignup] = useState<User>({
    email: '',
    username: '',
    password: '',
  });
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {};
  return (
    <div className={styles.container}>
      <h1>CodeBattles</h1>
      <Form data={signup} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
};

export default Signup;
