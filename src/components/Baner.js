import React from 'react';
import useData from '../hooks/useData';
import './style/baner.scss';
import {BsFacebook ,BsGithub ,BsLinkedin ,BsInstagram} from 'react-icons/bs';

function Baner() {
    const xdiv = React.useRef(null);
    const ydiv = React.useRef(null);
    let da = useData('/');

    React.useEffect(()=>{
      console.log(da)
    //    let yy = document.querySelector('.y')
        window.onmousemove = function(e){
            let x= e.clientX;
            let y= e.clientY;
            ydiv.current.style.left = x + "px";
            xdiv.current.style.top = y + "px";
           }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
        <div className="hero-benar">
            <h1 className='titel-name'>Nahid Hasan</h1>
            <h2>web developer</h2>
            <p className='defination'>I am a Web Developer. Proficient in modern
            website design. I specialize in pixelperfect responsive design with React JS,Tailwind, ES6 JavaScript. I also have knowledge working with
            server-side node.js express.js, MongoDB</p>
            <a className='btn-glitch' href="/">download resumi</a>
            <div className="social-link">
              <a className='per-link' href="/"> <BsFacebook /></a>
              <a className='per-link' href="/"> <BsGithub /></a>
              <a className='per-link' href="/"> <BsLinkedin /></a>
              <a className='per-link' href="/"> <BsInstagram /></a>
            </div>
            
            <div ref={xdiv} className="x"></div>
            <div ref={ydiv} className="y"></div>
        </div>
      )
}

export default Baner;