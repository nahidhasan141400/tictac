import React from 'react';
import './style/cocial.scss';
import {BsFacebook ,BsLinkedin ,BsGithub ,BsInstagram , BsGoogle , BsTwitter , BsYoutube} from 'react-icons/bs';

function Cocial() {
  return (
    <section className="social-link-tab">
      <div className="coteinaer">
          <a href="/"> 
              <span> <BsFacebook /> </span>
            <div className="text">
              <h1>facebook</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsLinkedin /> </span>
            <div className="text">
              <h1>Linkedin</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsGithub /> </span>
            <div className="text">
              <h1>Github</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsInstagram /> </span>
            <div className="text">
              <h1>Instagram</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsGoogle /> </span>
            <div className="text">
              <h1>Google</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsTwitter /> </span>
            <div className="text">
              <h1>Twitter</h1>
            </div>
          </a>
          <a href="/"> 
              <span> <BsYoutube /> </span>
            <div className="text">
              <h1>Youtube</h1>
            </div>
          </a>
      </div>
    </section>
  )
}

export default Cocial;