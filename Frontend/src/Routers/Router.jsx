import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
