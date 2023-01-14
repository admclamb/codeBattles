import { User } from '@/ts/types/User';
import Link from 'next/link';
import React from 'react';

type Props = {
  user: User | null;
};

const NotLoggedIn = ({ user }: Props) => {
  return (
    <ul className={`flex ${user && 'hidden'}`}>
      <li className="mr-4">
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/signup">Signup</Link>
      </li>
    </ul>
  );
};

export default NotLoggedIn;
