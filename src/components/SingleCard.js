import React from 'react'
import dayjs from 'dayjs'

import cloudyImg from '../assets/cloudy.png'
import sunImg from '../assets/sun.png'
import cloudImg from '../assets/cloud.png'
import rainImg from '../assets/rain.png'
import thunderstormImg from '../assets/thunderstorm.png'
import snowImg from '../assets/snow.png'
import rainyDayImg from '../assets/rainy-day.png'

const SingleCard = ({item, className, onClick}) => {

  const weekday = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  const ChooseIcon = () => {
    switch(item.weather[0].icon){
      case '01d':
        return (<img alt='weatherIcon' className='weatherIcon' src={sunImg} style={{ width: 30, height: 30  }}/>);
      case '02d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudyImg} style={{ width: 30, height: 30  }}/>)
      case '03d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudImg} style={{ width: 30, height: 30  }}/>)
      case '04d':
        return (<img alt='weatherIcon' className='weatherIcon' src={cloudyImg} style={{ width: 30, height: 30  }}/>)
      case '09d':
        return (<img alt='weatherIcon' className='weatherIcon' src={rainImg} style={{ width: 30, height: 30 }}/>)
      case '10d':
        return (<img alt='weatherIcon' className='weatherIcon' src={rainyDayImg} style={{ width: 30, height: 30 }}/>)
      case '11d':
        return (<img alt='weatherIcon' className='weatherIcon' src={thunderstormImg} style={{ width: 30, height: 30 }}/>)
      case '13d':
        return (<img alt='weatherIcon' className='weatherIcon' src={snowImg} style={{ width: 30, height: 30 }}/>)
      default:
        return (<img alt='weatherIcon' className='weatherIcon' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />)       
    }
  }

  const weekdayindex = dayjs.unix(item.dt).day()
  return (
    <>
      <li key={item.moonrise} className={className} onClick={onClick}>
        {ChooseIcon()}
        <span className='day-name'>
          {weekday[weekdayindex].slice(0,3)}
        </span>

        <span className='day-temp'>
          {Math.round(item.temp.max)} <sup>o</sup>C
        </span>

      </li>
    </>
  )
}

export default SingleCard