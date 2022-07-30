import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
type Props = {
  code?: string;
  language?: string;
  theme: any;
  codeSetup?: string;
  setCode: any;
};
const EditorWindow = ({ code, language, theme, codeSetup, setCode }: Props) => {
  const handleEditorChange = (value: any) => {
    setCode(value);
  };
  return (
    <div className="w-100 h-100">
      <Editor
        height="85vh"
        width="100%"
        language={language || 'javascript'}
        theme={theme}
        defaultValue={codeSetup}
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorWindow;
