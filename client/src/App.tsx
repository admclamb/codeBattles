import PageRoutes from './pages/PageRoutes';
import Layout from './components/Layout/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
    },
    secondary: {
      light: '#8eacbb',
      main: '#607d8b',
      dark: '#34515',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>Yo</h1>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
