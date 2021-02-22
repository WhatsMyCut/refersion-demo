import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = (props) => {
  const { data } = props;
  console.log('data', data);
  return (
    <>
    <WeatherIcon {...data}/>
    </>
  )

}
export default Forecast;
