import { User } from '@/ts/types/User';
import * as React from 'react';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: React.ReactNode;
  user: User | null;
  classes: string;
  padding: string;
};

export default function Layout({ children, user, classes, padding }: Props) {
  return (
    <div className="">
      <Navbar user={user} />
      <main
        className={`h-screen bg-slate-900 text-white ${padding} ${classes}`}
      >
        {children}
      </main>
    </div>
  );
}

Layout.defaultProps = {
  classes: '',
  padding: 'pt-3',
};
