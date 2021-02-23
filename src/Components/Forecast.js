import '../Styles/Forecast.scss';

import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = (props) => {
  const { wData, defaultIconId, } = props;
  const data = wData && wData['default'];
  const main = data && data['main'] ? data['main'] : { temp: '--', temp_min: '--', temp_max: '--'};
  console.log('data', data);
  const name = data && data['name'] ? data['name'] : '--';
  const weather = data && data['main'] ? data['weather'] : {};
  const weatherDescription = weather && weather['main'] ? weather['main'] : '--';
  const iconId = weather && weather.icon ? weather.icon : defaultIconId;
  // const iconId = data.icon || defaultIcon;
  return (
    <div className="forecast-container">
      <div className="forecast-text">
        <div className="forecast-name">{name}</div>
        <WeatherIcon {...{iconId}}/>
      </div>
      <div className="forecast-desc">{weatherDescription}</div>
      <div className="forecast-numbers">
        <div className="temp">{ main.temp }&deg;</div>
        <div className="min-max">
          <div className="min">{ main.temp_min }&deg;</div>
          <div className="max">{ main.temp_max }&deg;</div>
        </div>
      </div>
    </div>
  )

}
export default Forecast;
