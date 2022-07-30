import PageRoutes from './pages/PageRoutes';
import Layout from './components/Layout/Layout';
import EditorWindow from './components/editor/EditorWindow.tsx/EditorWindow';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('cobalt');
  const [code, setCode] = useState('// some comment');
  return (
    <div className="bg-dark">
      <Layout>
        <EditorWindow theme={theme} code={code} setCode={setCode} />
      </Layout>
    </div>
  );
}

export default App;
