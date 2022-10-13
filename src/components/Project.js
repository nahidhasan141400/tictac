import React from 'react';
import Pro from './view/Pro';
import img2 from '../img/react-todo.png';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/projec.scss';



function Project() {
  return (    
      <div className='project-show-cont'>
        <div className="bg">
          <div className="cercel o"></div>
          <div className="cercel t"></div>
        </div>
        <div className="navigator">
          <button>JavaScript project</button>
          <button>Fullstack project</button>
          <button>Side project</button>
        </div>
        <div className="project-ro">
          
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
              <Pro img={img2} link='/nahid' titel='to do list'/>
          
        </div>
    </div>
  )
}

export default Project;