import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import{ create } from 'zustand';
import Home from './pages/Home';



function App() {
  return (
    <Routes>
        <Route element={<Home/>} path="/" />
    </Routes>
  );
}

export default App;
