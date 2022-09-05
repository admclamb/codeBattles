import React, { useState } from 'react';
import Card from '../../components/card/Card/Card';
import EditorWindow from '../../components/editor/EditorWindow.tsx/EditorWindow';
import styles from './Puzzles.module.css';
type Props = {};

const Puzzles = (props: Props) => {
  const config = {
    code: `
      const Solution = (array) => {
        // Solution goes here
      }
    `,
    language: 'javascript',
    theme: 'light',
    codeSetup: '// enter the new code here',
  };
  const [code, setCode] = useState('');
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Puzzle Battle</h2>
      </header>
      <section className={styles.main}>
        <div className={styles.editor}>
          <EditorWindow
            code={config.code}
            language={config.language}
            theme={config.theme}
            codeSetup={config.codeSetup}
          />
        </div>
        <div className={styles.aside}>
          <div className={styles.body}>
            <h1>FzzBuzz</h1>
            <ul className={styles.bodyNav}>
              <li>
                <p>Rating: 100</p>
              </li>
              <li>
                <p>1024 Likes</p>
              </li>
              <li>
                <button className="button">Save</button>
              </li>
            </ul>
            <div className="body">
              <p>
                Given a positive integer n, return an array of strings from 1 to
                n - 1 and has the following:
              </p>
              <ul>
                <li>
                  If i is divisible by 3 and 5 the element should be "FizzBuzz"
                </li>
                <li>If i is divisible by 3 the element should be "Fizz"</li>
                <li>If i is divisible by 5 the element should be "Buzz"</li>
              </ul>
              <p>If n = 0, return an empty array.</p>
              <h4>Example 1:</h4>
              <pre>
                <strong>Input:</strong> n = 3 <br />
                <strong>Output:</strong>" ['1','2','Fizz']"
              </pre>
              <h4>Example 2:</h4>
              <pre>
                <strong>Input:</strong> n = 5 <strong>Output:</strong>"
                ['1','2','Fizz','4','Buzz']"
              </pre>
              <pre>
                <strong>Input:</strong>n = 10
                <strong>Output:</strong>
                ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"]
              </pre>
            </div>
          </div>
          <div className={styles.test}>
            <h3>Test Cases:</h3>
            <textarea />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <button className={`button button-primary ${styles.submitButton}`}>
          Run
        </button>
      </footer>
    </div>
  );
};

export default Puzzles;
