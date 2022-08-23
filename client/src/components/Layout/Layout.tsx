import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../navigation/Navbar/Navbar';
import styles from './Layout.module.css';
type Props = {
  children?: React.ReactNode;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Layout = ({ children, setTheme }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.sidebar}>
        <Navbar setTheme={setTheme} />
      </header>
      <main className={styles.main}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
