import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Example from './pages/Example';

function App() {
  return (
    <Routes>
        <Route element={<Example/>} path="/" />
    </Routes>
  );
}

export default App;
