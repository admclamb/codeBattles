import React, { useState } from 'react';
import ButtonDefault from '@/components/Button/ButtonDefault/ButtonDefault';
import Card from '@/components/Card/Card';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { User } from '@/ts/types/User';
import styles from './Puzzles.module.css';

type Props = {};

const Puzzles = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <Head>
        <title>Puzzles | Code Battles</title>
      </Head>
      <Layout user={user} padding="p-6" classes={styles.container}>
        <Card>
          <h3>Code</h3>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">1. FizzBuzz</h3>
        </Card>
      </Layout>
    </>
  );
};

export default Puzzles;
