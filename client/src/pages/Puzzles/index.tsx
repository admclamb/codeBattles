import React, { useState } from 'react';
import ButtonDefault from '@/components/Button/ButtonDefault/ButtonDefault';
import Card from '@/components/Card/Card';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { User } from '@/ts/types/User';
import styles from './Puzzles.module.css';
import Code from '@/components/Code/Code';

type Props = {};

const Puzzles = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [code, setCode] = useState<string>(
    `
  /*
 * @param {number} n
 * @return {string[]}
 */
  const solution = function(n) {
    const output = [];
    for (let i=1; i<=n; i++) {
        let string = '';
        if (i % 3 === 0) {
            string += "Fizz";
        }
        if (i % 5 === 0) {
            string += "Buzz";
        }
        if (!string.length) {
            string += i;
        }
        output.push(string);
    }
    return output;
  }
  `
  );

  return (
    <>
      <Head>
        <title>Puzzles | Code Battles</title>
      </Head>
      <Layout user={user} padding="p-6" classes={`${styles.container} gap-5`}>
        <Code code={code} />
        <Card>
          <h3 className="text-lg font-semibold">1. FizzBuzz</h3>
        </Card>
        <Card classes="h-32">
          <ButtonDefault>Run</ButtonDefault>
        </Card>
      </Layout>
    </>
  );
};

export default Puzzles;
