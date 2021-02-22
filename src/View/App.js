import * as defaultData from '../weather'

import { Forecast, Form } from '../Components';
import React, { useEffect, useState } from 'react';

const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const weatherCreds = ',us&appid=709847967f5e54b97308c1b2cae4dee5'
const defaultZipcode = '10036';
const defaultIconId = '10d';
const buttonText = 'Update';

const App = () => {
  const [zipCode, setZipCode] = useState(defaultZipcode);
  const [inputText, setInputText] = useState('');
  const [wData, setWData] = useState(defaultData)
  const [error, setError]= useState(undefined);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit');
  }

  const handleZipcodeChange = (evt) => {
    evt.preventDefault();
    console.log('handleZipcodeChange');
  }

  useEffect(() => {
    const getData = async () => {
      return await(
        fetch(weatherAPI + zipCode + weatherCreds)
        .then(result => {
          if (result.ok) return JSON.stringify(result);
          throw new Error('Network response was not ok.');
        })
        .catch((e) => setError(e))
      );
    }

    // Update the document title using the browser API
    const data = getData();
    console.log('received data', data);
    if (data) setWData(data);
  }, [setWData, zipCode]);

  return (
    <React.Fragment>
      { error ? JSON.stringify(error) : '' }
      <Forecast {...{wData, defaultZipcode, defaultIconId}}></Forecast>
      <hr/>
      <Form {...{handleSubmit, defaultZipcode, handleZipcodeChange, buttonText}}></Form>
    </React.Fragment>
  );
}

export default App;
