import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

import React from 'react';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { Logo } from './components/Logo/Logo';

const App = () => {
  return (
    <>
      <Logo />
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  );
};

export default App;
