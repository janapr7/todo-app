import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import{ create } from 'zustand';
import Example from './pages/Example';
import Home from './pages/Home';



function App() {
  const useStore = create(set => ({
    votes: 0,
  }));
  return (
    <Routes>
        <Route element={<Home/>} path="/" />
    </Routes>
  );
}

export default App;
