import React from 'react';
import ChooseState from './ChooseState';
import WeekInfoCard from './WeekInfoCard';
import Humidity from './Humidity';
import Left from './Left';

const Home = () =>{

  return (
    <div className='homeWrap'>
      <div className='weatherSection'>
        <Left />
        <div className='rightSide'>
          <ChooseState />
          <WeekInfoCard />
          <Humidity />
        </div>
      </div>
    </div>
  )
}

export default Home;