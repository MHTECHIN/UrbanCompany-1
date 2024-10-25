import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Slider from './pages/Slider'
import Noteworthy from './pages/Noteworthy'
import BookedService from './pages/BookedServices'

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>


      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
