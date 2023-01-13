import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotSignedInNav.module.css';
type Props = {};

const NotSignedInNav = (props: Props) => {
  return (
    <>
      <Link
        to="signup"
        className={`${styles.button} button button-100 button-invert`}
      >
        Signup
      </Link>
      <Link
        to="login"
        className={`${styles.button} button button-100 button-primary`}
      >
        Login
      </Link>
    </>
  );
};

export default NotSignedInNav;
