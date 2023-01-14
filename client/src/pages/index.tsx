import Layout from '@/components/Layout/Layout';
import { User } from '@/ts/types/User';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <Head>
        <title>Home | Code Battles</title>
      </Head>
      <Layout user={user}>
        <div className="container mx-auto">
          <p>Hello</p>
        </div>
      </Layout>
    </>
  );
}
