import React from 'react';
import './style/about.scss';
import photo from '../img/nahidPic.png';

function Aboutme() {
  return (
    <section className='about-me'>
        <div className='star-annim'>
            <span id='sa1'></span>
            <span id='sa2'></span>
            <span id='sa3'></span>
            <span id='sa4'></span>
            <span id='sa5'></span>
            <span id='sa6'></span>
            <span id='sa7'></span>
            <span id='sa8'></span>
            <span id='sa9'></span>
            <span id='sa10'></span>
        </div>
        <div className="about-div">
            <div className="img-photo">
              <img src={photo} alt="nahid hasan" />
            </div>
            <div className="about-details">
              <h1>about me</h1>
              <p>Hi I am Nahid Hasan Sagar.I am Web Developer from Bangladesh.
                  Proficient in modern website design.I have 2 year experience to work with html and javascript.
                  I was first interested in web developmet when I thought I would develop game in class 8.
                  But I did not know how to develop the game. Then the first know about programming from youtube. After that I started learning web developmet. and now this has become my hobby.
                  I am also interested in photography
              </p>
              <div className="skill">
                <h1>skill's</h1>
                <div className="skills">
                  <div className="ski javascript">JavaScript</div>
                  <div className="ski React JS">React JS</div>
                  <div className="ski node js">Node JS</div>
                  <div className="ski css">Css/Scss</div>
                  <div className="ski mongoDB">MongoDB</div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme;