import React from 'react';
import Card from '../Card/Card';
import CodeParser from '@/utils/CodeParser';
import { jsConfig } from '@/utils/jsKeywords';
import styles from './Code.module.css';
import { LanguageConfig } from '@/ts/types/LanguageConfig';
type Props = {
  code: string;
};

const Code = ({ code = '' }: Props) => {
  return (
    <Card padding="py-0 px-3" classes={`${styles.codeContainer} gap-3`}>
      <aside className="border-r pt-2 pr-2 text-end dark:border-slate-50/[0.06] h-full">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </aside>
      <pre className={`pt-2 ${styles.code}`}>
        {CodeParser.parseToHTML<LanguageConfig>(code, jsConfig)}
      </pre>
      {/* <pre className={`pt-2 ${styles.code}`}>
        <div>// refer to the example and write your first JS function</div>
        <div>
          <span>cont</span> <span>solution</span> = (<span>number</span>) => &#123;
        </div>
          <div><span>const</span>output<span /> = [];</div>
          <div><span>for</span> (<span>let</span></div>
        <div>
        &#125;
        </div>
      </pre> */}
    </Card>
  );
};

export default Code;
