import React from 'react';
import './style/foter.scss';

function Foter() {
  return (
    <footer>
        <div className="foot-container">
            <div className="one">
                <h1>about</h1>
                <h2>address</h2>
                <p>hapaniya,matlab (uttar),chandpur,bangladesh</p>
                <h2>email</h2>
                <p>nahidhasan141400@gmail.com</p>
                <h2>resume</h2>
                <p><a href="/">download resume</a></p>
            </div>
            <div className="tow">
                <h1>Links</h1>
                <ol>
                    <li>
                        <a href="/">Easy soft</a>
                    </li>
                    <li>
                        <a href="/">ncrip</a>
                    </li>
                </ol>
            </div>
        </div>
        <div className="copyright">
            <h1>this site develop by <a href="/">nahid hasan</a></h1>
        </div>
    </footer>
  )
}

export default Foter