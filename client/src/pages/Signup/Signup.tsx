import React, { useState } from 'react';
import Form from '../../components/form/Form/Form';
import { User } from '../../ts/interfaces/User';
const Signup = () => {
  const [signup, setSignup] = useState<User>({
    email: '',
    username: '',
    password: '',
  });
  const handleChange = ({ target }) => {};
  return (
    <Form>
      <input />
    </Form>
  );
};

export default Signup;
