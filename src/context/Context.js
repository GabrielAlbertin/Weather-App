import React, {useReducer, useContext} from 'react'
import { WeatherReducer } from './Reducer'

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children}) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      "ID": "4814",
      "Nome": "Campinas",
      "Estado": "SP"
    },
    current: '',
    daily: ''
});

  return (
    <>
      <WeatherAPPContext.Provider value={{state, dispatch}}>
        {children}
      </WeatherAPPContext.Provider>
    </>
  )
}
export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
  return useContext(WeatherAPPContext)
}