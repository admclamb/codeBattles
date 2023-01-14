import { User } from '@/ts/types/User';
import Link from 'next/link';
import React from 'react';
import NotLoggedIn from './NotLoggedIn/NotLoggedIn';

type Props = {
  user: User | null;
};

const Navbar = ({ user }: Props) => {
  return (
    <nav className="sticky top-0 h-16 p-3 m-0 border-b backdrop-blur dark:bg-slate-900 dark:border-slate-50/[0.06] dark:text-white">
      <div className="container flex items-center justify-between h-full mx-auto">
        <Link href="/">
          <h1 className="text-lg font-semibold">Code Battles</h1>
        </Link>
        <div>
          <NotLoggedIn user={user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
