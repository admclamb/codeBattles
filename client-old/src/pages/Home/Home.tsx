import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card/Card';
import styles from './Home.module.css';
type Props = {};

const Home = (props: Props) => {
  return (
    <div className={`container ${styles.main}`}>
      <Card containerName="battle">
        <h1 className={styles.header}>Battle Online</h1>
        <p className={styles.description}>
          Play 1v1 against someone with similar skill
        </p>
        <button
          className="button button-primary
         button-lg"
        >
          Battle now
        </button>
      </Card>
      <Card containerName="puzzle">
        <h1 className={styles.header}>Puzzle Battle</h1>
        <p className={styles.description}>
          Practice your skills solo in these puzzle battles
        </p>
        <Link
          to="/puzzles"
          className="button button-primary
         button-lg"
        >
          Puzzle Now
        </Link>
      </Card>
      <Card containerName="stats">
        <h1 className={styles.header}>Stats</h1>
      </Card>
      <Card containerName="oppurtunities">
        <h1 className={styles.header}>Oppurtunities</h1>
      </Card>
      <Card containerName="social">
        <h1 className={styles.header}>Social</h1>
      </Card>
      <Card containerName="leaderboards">
        <h1 className={styles.header}>Leaderboards</h1>
      </Card>
      <Card containerName="forum">
        <h1 className={styles.header}>Forum</h1>
      </Card>
    </div>
  );
};

export default Home;
