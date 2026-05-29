import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Project from './pages/Project';


const App = () => {
  return (
    <div className='text-white bg-black w-full h-screen text-6xl'>
      <h1>yo</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/agence' element={<Agence/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
      </Routes>
    </div>
  )
}

export default App