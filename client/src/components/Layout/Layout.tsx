import { User } from '@/ts/types/User';
import * as React from 'react';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: React.ReactNode;
  user: User | null;
};

export default function Layout({ children, user }: Props) {
  return (
    <div className="">
      <Navbar user={user} />
      <main className="h-screen bg-slate-900 text-white pt-3">{children}</main>
    </div>
  );
}
