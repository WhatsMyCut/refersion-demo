import React from 'react';

const iconAPI = 'http://openweathermap.org/img/w/';
const iconExt = '.png';

export const WeatherIcon = (props) => {
  const { iconId } = props;
  return (
    <>
    <img className='weather-icon' src={iconAPI + iconId + iconExt} id={iconId} alt="icon"/>
    </>
  )

}

export default WeatherIcon;
