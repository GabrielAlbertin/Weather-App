import React, { useEffect, useState } from 'react'
import { UseWeatherAPPContext } from '../context/Context'
import SingleCard from '../components/SingleCard'

const WeekInfoCard = () => {
  const [selectedCard, setSelectedCard] = useState(0)
  const {state:{daily}, dispatch} = UseWeatherAPPContext();

  const updateCurrent = () => {
    return(
      dispatch({
        type:'SET_CURRENT',
        payload:daily[selectedCard]
      })
    )
  }

  useEffect(() => {
    updateCurrent();
    // eslint-disable-next-line
  },[daily, selectedCard])

  return(
    <>
      <div className='cardWrap'>
        <ul className='cardList'>
          {
            daily && daily.length > 0 ? daily.map ((item, index) => {
              if(index < 7){
                return <SingleCard key={index} item={item} className={index === selectedCard ? 'active' : ''} onClick={() => {
                  setSelectedCard(index)
                  updateCurrent();
                }}/> 
              }
            }) : ''
          }        

        </ul>
      </div>
    </>
  )
}

export default WeekInfoCard