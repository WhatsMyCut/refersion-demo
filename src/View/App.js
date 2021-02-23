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
  const [inputText, setInputText] = useState(defaultZipcode);
  // eslint-disable-next-line no-unused-vars
  const [wData, setWData] = useState(defaultData)
  const [error, setError]= useState(undefined);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    //console.log('handleSubmit', evt.target);
    const { target } = evt;
    if (target && target.value) {
      if (inputText.length < 5) {
        setError('Error: Please enter a valid zip code.');
      }
      setZipCode(inputText);
    }
  }, [inputText]);

  const handleInputChange = useCallback((evt) => {
    evt.preventDefault();
    const { target } = evt;
    if (target && target.value) {
      if (target.value === 1003) { // handle backspace
        setInputText(target.value);
      }
      // console.log('key: ', target.value)
      if (!isNaN(target.value)) {
        setInputText(target.value);
      }
    }
    return false;
  },[]);

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
      .catch((e) => setError(`Error:` + e.message))
    );
  }


  useEffect(() => {
    if (zipCode.length === 5) getData(zipCode);
  }, [zipCode])

  return (
    <React.Fragment>
      <div className="app">
        { error && <div className="error">{ JSON.stringify(error) }</div> }
        <Forecast {...{wData, defaultZipcode, defaultIconId}}></Forecast>
        <hr/>
        <Form {...{handleSubmit, defaultZipcode, handleZipcodeChange: handleInputChange, inputText, buttonText}}></Form>
      </div>
    </React.Fragment>
  );
}

export default App;
