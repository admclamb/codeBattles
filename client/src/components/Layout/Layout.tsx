import React from 'react';
import Navbar from '../navigation/Navbar/Navbar';
type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header className="p-relative">
        <Navbar />
      </header>
      <main className='main'>{children}</main>
    </>
  );
};

export default Layout;
