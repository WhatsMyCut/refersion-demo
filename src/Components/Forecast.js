import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = (props) => {
  const { wData, defaultIconId, } = props;
  const data = wData && wData['default'];
  console.log('data', data);
  const name = data && data['name'] ? data['name'] : '--';
  const weather = data && data['weather'] ? data['weather'] : {};
  const iconId = weather && weather.icon ? weather.icon : defaultIconId;
  // const iconId = data.icon || defaultIcon;
  return (
    <>
    <div className="forecast-name">{name}</div>
    <WeatherIcon {...{iconId}}/>
    </>
  )

}
export default Forecast;
