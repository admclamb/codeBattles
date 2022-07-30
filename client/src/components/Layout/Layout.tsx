import React from 'react';
import Navbar from '../navigation/Navbar/Navbar';
import styles from './Layout.module.scss';
type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
