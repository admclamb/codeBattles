import React from 'react';
import Card from '../../components/card/Card/Card';
import { Link } from 'react-router-dom';
import styles from './NoMatch.module.css';
const NoMatch = () => {
  return (
    <div className={`${styles.container} container`}>
      <Card>
        <h2>404 Page not found</h2>
        <p className={styles.description}>
          We cannot find the page you are looking for
        </p>
        <Link to="/" className="button button-primary">
          Homepage
        </Link>
      </Card>
    </div>
  );
};

export default NoMatch;
