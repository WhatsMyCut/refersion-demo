import React from 'react';

const iconAPI = 'http://openweathermap.org/img/w/';
const iconExt = '.png';

export const WeatherIcon = (props) => {
  const { iconId } = props;
  return (
    <div className="weather-icon">
      <img src={iconAPI + iconId + iconExt} id={iconId} alt="icon"/>
    </div>
  )

}

export default WeatherIcon;
