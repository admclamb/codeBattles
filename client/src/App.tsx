import PageRoutes from './pages/PageRoutes';
import Layout from './Layout/Layout';
import EditorWindow from './components/editor/EditorWindow.tsx/EditorWindow';
import { useState } from 'react';

function App() {
  const [code, setCode] = useState('// some comment');
  const [theme, setTheme] = useState<string>('light');
  console.log(theme);
  return (
    <div data-theme={theme} className="App">
      <Layout setTheme={setTheme}>
        <PageRoutes />
      </Layout>
    </div>
  );
}

export default App;
