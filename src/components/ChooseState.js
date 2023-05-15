import React, { useEffect, useState } from 'react'
import cities from '../data/Cidades.json'
import { UseWeatherAPPContext } from '../context/Context'
import axios from 'axios'

const ChooseState = () => {

  const {state:{city}, dispatch} = UseWeatherAPPContext();
  const [value, setValue] = useState('Campinas - SP');
  const [coord, setCoord] = useState({lat: -22, long: -44})

  let exclude = 'hourly,minutely'
  
  const handleChange = (e) => {
    setValue(e.target.value)
    const selectedCity = cities.filter((city) => {
      return city.Nome === e.target.value
    })[0]
    dispatch({
      type:'SET_CITY',
      payload: selectedCity
    })
  }

  const API_KEY = 'd1e690496ad59ec5903ae8053969c360';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.long}&lang=pt_br&exclude=${exclude}&units=metric&appid=${API_KEY}`
  const urlLat = `http://api.openweathermap.org/geo/1.0/direct?q=${city.Nome}&limit=5&appid=${API_KEY}`

  const fetchLat = async () => {
    await axios(urlLat).then((data) => {
      setCoord({lat: data.data[0].lat, long: data.data[0].lon})
    })
    .catch(console.error);
  }

  const fetchData = async () => {
    await axios(url).then((data) => {
      console.log(data)
      let _daily = data.data.daily;
      dispatch({
        type: 'SET_DAILY',
        payload: _daily
      })
    })
    .catch(console.error);
  }

  useEffect(()=> {
    fetchLat();
    fetchData()
    // eslint-disable-next-line
  }, [city])

  return (
    <div className='stateWrap'>
      <select className='stateMenu' value={value} onChange={handleChange}>
        {
          cities && cities.length > 0 && cities.map((city)=>{
            return(
              <option key={city.ID} value={city.Nome}>{`${city.Nome} - ${city.Estado}`}</option>
            )
         })
        }
      </select>
    </div>
  )
}

export default ChooseState
