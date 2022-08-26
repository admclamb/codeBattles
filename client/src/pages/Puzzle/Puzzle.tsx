import React from 'react';
import Card from '../../components/card/Card/Card';
type Props = {};

const Puzzle = (props: Props) => {
  return (
    <div className="container">
      <h1>Puzzle Battle</h1>
      <Card>{<h1>Puzzle</h1>}</Card>
    </div>
  );
};

export default Puzzle;
