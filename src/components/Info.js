import React from 'react'
import './style/info.scss'
import {FaTemperatureLow} from 'react-icons/fa';

function Info2() {
  let [wether , setWether] = React.useState({temp:0,icon:'http://openweathermap.org/img/w/01d.png'})

  React.useEffect(()=>{
    let getdata = async ()=>{
      try {
        let datajson = await fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=279e5f7dd5b499f4f6099d490ece3f7d');
        let data =await datajson.json();
        console.log('data fetch !!')
        setWether({ 
          temp: Math.round(data.main.temp-273.15),
          icon:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        });
      } catch (error) {
        console.error("api call faild!");
      }
    }
    getdata();

    },[])
  
  return (
    <section className='info-section2'>
      <div className="bgCer">
        <div className="cercel-1"></div>
        <div className="cercel-2"></div>
        <div className="cercel-3"></div>
        <div className="cercel-4"></div>
      </div>
      <div className="info2">
        <div className="api">
          <h1 className='city'><span><img src={wether.icon} alt="" /></span> dhaka</h1>
          <div className="tem">
            <div><span><FaTemperatureLow /></span>{wether.temp}&deg; C</div>
          </div>
        </div>
        <div className="start-buttton">
          <h1>let's work together</h1>
          <a className='btn-glitch' href="/">start</a>
        </div>
      </div>
        
    </section>
  )
}

export default Info2