import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignedInNav from '../SignedInNav/SignedInNav';
import NotSignedInNav from '../NotSignedInNav/NotSignedInNav';
import styles from './Navbar.module.css';
type Props = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ setTheme }: Props) => {
  const [user, setUser] = useState<{} | null>(null);
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navBrand}>CodeBattles</h1>
      <ul className={styles.ul}>
        <li>
          <Link to="/">Battle</Link>
        </li>
        <li>
          <Link to="/">Puzzles</Link>
        </li>
        <li>
          <Link to="/">Learn</Link>
        </li>
        <li>
          <Link to="/">Leaderboards</Link>
        </li>
      </ul>
      {user ? <SignedInNav /> : <NotSignedInNav />}
      <button
        className={styles.button}
        onClick={() =>
          setTheme((curr: string) => (curr === 'dark' ? 'light' : 'dark'))
        }
      >
        Theme
      </button>
    </nav>
  );
};
export default Navbar;
