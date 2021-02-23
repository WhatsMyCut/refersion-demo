import '../Styles/App.scss';

import * as defaultData from '../weather';

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
    const { target } = evt;
    const newVal = zipCode
    if (target && target.value) {
      if (!isNaN(target.value)) {
        setInputText(newVal);
        return newVal;
      }
    }
    return false;
  }

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
  useEffect(() => {
    // getData()
    // Update the document title using the browser API
    // const data = getData();
    // console.log('received data', data);
    // if (data) setWData(data);
  }, [setWData, zipCode]);

  return (
    <React.Fragment>
      <div className="app">
        { error ? JSON.stringify(error) : '' }
        <Forecast {...{wData, defaultZipcode, defaultIconId}}></Forecast>
        <hr/>
        <Form {...{handleSubmit, defaultZipcode, handleZipcodeChange, inputText, buttonText}}></Form>
      </div>
    </React.Fragment>
  );
}

export default App;
