import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from '../../components/form/Form/Form';
import { User } from '../../ts/interfaces/User';
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
  return <Form data={signup} onChange={onChange} onSubmit={onSubmit} />;
};

export default Signup;
