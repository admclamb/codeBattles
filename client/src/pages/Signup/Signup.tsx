import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form/Form';
import Input from '../../components/form/Input/Input';
import { User } from '../../ts/interfaces/User';
import ErrorAlert from '../../error/ErrorAlert';
import styles from './Signup.module.css';
import { UserApi } from '../../api/UserApi';
const Signup = ({ setUser }) => {
  const [signup, setSignup] = useState<User>({
    email: '',
    username: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState('Continue');
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    if (name === 'passwordConfirm') {
      setConfirmPassword(value);
    } else {
      setSignup({
        ...signup,
        [name]: value,
      });
    }
  };
  const footerText = (
    <p className={styles.footer}>
      Already have an account? <Link to="/login">Sign in here</Link>
    </p>
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();
    setButtonText('Loading...');
    try {
      if (signup.password === confirmPassword) {
        const response = await UserApi.signup(signup);
        console.log('res: ', response);
        setUser(response);
      } else {
        throw 'Passwords are not matching. Please try again.';
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setButtonText('Continue');
    }
  };
  return (
    <div className={styles.container}>
      {error && <ErrorAlert error={error} />}
      <h1 className={styles.title}>CodeBattles</h1>
      <Form
        data={signup}
        onChange={onChange}
        onSubmit={onSubmit}
        footer={footerText}
        submitText={buttonText}
      >
        <Input
          onChange={onChange}
          value={confirmPassword}
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          label="Confirm Password"
        />
      </Form>
    </div>
  );
};

export default Signup;
