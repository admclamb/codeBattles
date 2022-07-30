import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav
      className={`${styles.nav} bg-darker position-sticky h-100 sidebar text-light`}
    >
      <Link to="/" className="navbar-brand">
        Code Battles
      </Link>
      <ul>
        <li>
          <Link to="/battle">Code Rush</Link>
        </li>
        <li>
          <Link to="/battle">Battle</Link>
        </li>
        <li>
          <Link to="/battle">Daily Challenge</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
