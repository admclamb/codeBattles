import React from 'react';
import { Link } from 'react-router-dom';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='side-navbar bg-darker text-light'>
      <Link to="/" className="navbar-brand">
        Code Battles
      </Link>
      <ul>
        <li>
          <Link to="/battle"><i className="fa-solid fa-puzzle-piece fa-3x"></i><p>Code Rush</p></Link>
        </li>
        <li>
          <Link to="/battle"><i className="fa-solid fa-axe-battle fa-3x"></i><p>Battle</p></Link>
        </li>
        <li>
          <Link to="/battle">Daily Challenge</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
