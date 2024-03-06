import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Maeng/Home';
import Test1 from './Maeng/Test1';
import Test2 from './Maeng/Test2';
import Test3 from './Maeng/Test3';

function App() {
  return (
    <BrowserRouter>
      <div classname='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/test3' element={<Test3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
