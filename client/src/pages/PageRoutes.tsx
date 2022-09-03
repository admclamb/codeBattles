import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Puzzle from './Puzzle/Puzzle';
import NoMatch from './NoMatch/NoMatch';
import Signup from './Signup/Signup';
const PageRoutes = ({ setUser }) => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/puzzles" element={<Puzzle />} />
      <Route path="/signup" element={<Signup setUser={setUser} />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
