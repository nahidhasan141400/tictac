import React from 'react';
import Info2 from '../components/Info';
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import Ach from '../components/Ach';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Cosial from '../components/Cocial';
import Foter from '../components/Foter';

function Main() {
  return (
    <div className="body">
        <Navbar />
        <Info2 />
        <Aboutme />
        <Ach />
        <Project />
        <Contact />
        <Cosial /> 
        <Foter />
    </div>
  )
}

export default Main;