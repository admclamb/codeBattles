import PageRoutes from './pages/PageRoutes';
import Layout from './Layout/Layout';
import EditorWindow from './components/editor/EditorWindow.tsx/EditorWindow';
import user from './ts/interfaces/User';
import { useState } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const [code, setCode] = useState('// some comment');
  const [theme, setTheme] = useState<string>('light');
  const [user, setUser] = useState<user>({});

  useEffect(() => {}, [user]);
  return (
    <div data-theme={theme} className="App">
      <UserContext.Provider value={user}>
        <Layout setTheme={setTheme}>
          <PageRoutes setUser={setUser} />
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
