import React from 'react'
import dayjs from 'dayjs'
import { UseWeatherAPPContext } from '../context/Context'
import cloudyImg from '../assets/cloudy.png'
import sunImg from '../assets/sun.png'
import cloudImg from '../assets/cloud.png'
import rainImg from '../assets/rain.png'
import thunderstormImg from '../assets/thunderstorm.png'
import snowImg from '../assets/snow.png'
import rainyDayImg from '../assets/rainy-day.png'

const Left = () => {
  const {state: {city, current}} = UseWeatherAPPContext();

  const weekday = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  if(!current) return <div>Carregando...</div>
  const weekdayindex = dayjs.unix(current.dt).day()

  const ChooseIcon = () => {
    switch(current.weather[0].icon){
      case '01d':
        return (<img alt='weatherIcon' className='weatherIcon' src={sunImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>);
      case '02d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudyImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '03d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '04d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudyImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '09d':
        return (<img alt='weatherIcon' className='weatherIcon' src={rainImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '10d':
        return (<img alt='weatherIcon' className='weatherIcon' src={rainyDayImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '11d':
        return (<img alt='weatherIcon' className='weatherIcon' src={thunderstormImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      case '13d':
        return (<img alt='weatherIcon' className='weatherIcon' src={snowImg} style={{ width: 60, height: 60, paddingTop: 10 }}/>)
      default:
        return (<img alt='weatherIcon' className='weatherIcon' src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />)       
    }
  }

  return (
    <>
      <div className='leftWrap'>
        <div className='dateWrap'>
          <h2>{weekday[weekdayindex]}</h2>
          <span className='dateDay'>
            {dayjs.unix(current.dt).locale('pt-br').format("DD/MM/YYYY")}
          </span>
          <span className='locationName'>{city.Nome} - {city.Estado}</span>

          <div className='weatherContainer'>
            {ChooseIcon()}
            <h1 className='weatherTemp'>{Math.round(current.temp.max)} <sup>o</sup>C</h1>
            <h3 className='weatherDesc'>{(current.weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}</h3>
          </div>
        </div>
      </div>
    </>
  )

}

export default Left