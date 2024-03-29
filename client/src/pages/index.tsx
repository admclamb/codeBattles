import ButtonDefault from '@/components/Button/ButtonDefault/ButtonDefault';
import Card from '@/components/Card/Card';
import Layout from '@/components/Layout/Layout';
import { User } from '@/ts/types/User';
import Head from 'next/head';
import Link from 'next/link';
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
          <section className="grid grid-cols-4 gap-4">
            <Card classes="col-span-2">
              <h3 className="text-xl font-semibold">Puzzles</h3>
              <p className="mb-4">Practice coding puzzles on your own</p>
              <ButtonDefault type="link" link="/Puzzles">
                Go
              </ButtonDefault>
            </Card>
          </section>
        </div>
      </Layout>
    </>
  );
}
