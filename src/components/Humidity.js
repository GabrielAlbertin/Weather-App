import React from 'react'
import { UseWeatherAPPContext } from '../context/Context'

const Humidity = () => {
  let {state: {current}} = UseWeatherAPPContext();

  const uvLevel = (uvLevel) => {
    if(uvLevel <= 2) return 'Baixo';
    if(uvLevel <= 5) return 'Médio';
    if(uvLevel <= 7) return 'Alto';
    if(uvLevel > 2) return 'Muito Alto';
  }

  return (
    <>
    {
      current ? <div className='humidityWrap'>
        <div className='humidityData'>
          <div className='title'>Índice UV</div>
          <div className='value'>{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})</div>
        </div>

        <div className='humidityData'>
          <div className='title'>Humidade</div>
          <div className='value'>{current.humidity} %</div>
        </div>

        <div className='humidityData'>
          <div className='title'>Vento</div>
          <div className='value'>{Math.round(current.wind_speed)} km/h</div>
        </div>

      </div> : ''
    }
    </>
  )
}

export default Humidity

