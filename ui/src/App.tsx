import './App.css';
import { Layout } from './layouts/pages/layout';
import { Home } from './layouts/pages/home';
import { Privacy } from './layouts/pages/privacy';
import { Terms } from './layouts/pages/terms';
import { Profile } from './layouts/pages/profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Home />}></Route>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;