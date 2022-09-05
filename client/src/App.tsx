import { useEffect } from 'react';
import PageRoutes from './pages/PageRoutes';
import Layout from './Layout/Layout';
import Token from './utils/Token';
import { User as user } from './ts/interfaces/User';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import { UserApi } from './api/UserApi';

function App() {
  const [code, setCode] = useState('// some comment');
  const [theme, setTheme] = useState<string>('light');
  const [user, setUser] = useState<user | null>(null);

  // get user form refresh token and access token
  useEffect(() => {
    const token = Token.getInstance();
    const refreshToken = token.getRefreshToken();
    if (refreshToken) {
      (async () => {
        const user = await UserApi.loginToken(refreshToken);
      })();
    }
  }, []);

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
