import '../Styles/App.scss';

import * as defaultData from '../weather';

import { Forecast, Form } from '../Components';
import React, { useCallback, useEffect, useState } from 'react';

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
    const { target } = evt;
    if (target && target.value) {
      setZipCode(target.value);
    }
  }

  const handleInputChange = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const newVal = inputText;
    if (target && target.value) {
      if (!isNaN(target.value)) {
        setInputText(newVal);
        return newVal;
      }
    }
    return false;
  }

  const getData = async (zipcode) => {
    return await(
      fetch(weatherAPI + zipcode + weatherCreds)
      .then(result => {
        if (result.ok) {
          return JSON.stringify(result);
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((e) => setError({message: e.message}))
    );
  }


  useEffect(() => {
    getData(zipCode);
  }, [zipCode])

  useCallback(() => {
    const data = getData(zipCode);
    if (data !== wData) setWData(data);
  },[wData, zipCode]);

  return (
    <React.Fragment>
      <div className="app">
        { error ? JSON.stringify(error) : '' }
        <Forecast {...{wData, defaultZipcode, defaultIconId}}></Forecast>
        <hr/>
        <Form {...{handleSubmit, defaultZipcode, handleZipcodeChange: handleInputChange, inputText, buttonText}}></Form>
      </div>
    </React.Fragment>
  );
}

export default App;
