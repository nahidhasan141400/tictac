import React from 'react'

function Pro({img , link , titel}) {
  return (
    <a  href={link} className="project-co">
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="text">
            <h1>{titel}</h1>
        </div>
    </a>
  )
}

export default Pro