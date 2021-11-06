import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Markdown from './pages/Markdown/Markdown';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import TypeRacer from './pages/TypeRacer/TypeRacer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/markdown' element={<Markdown />} />
        <Route path='/pomodoro' element={<Pomodoro />} />
        <Route path='/typeracer' element={<TypeRacer />} />
      </Routes>
    </>
  );
};

export default App;
