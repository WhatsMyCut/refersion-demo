import { Forecast, Form } from '../Components';
import React, { useState } from 'react';

const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const weatherCreds = ',us&appid=709847967f5e54b97308c1b2cae4dee5'
const defaultZipcode = '10001';
const defaultIconId = '10d';
const buttonText = 'Update';

const App = () => {
  const [zipCode, setZipCode] = useState(defaultZipcode);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit');
  }

  const handleZipcodeChange = (evt) => {
    evt.preventDefault();
    console.log('handleZipcodeChange');
  }

  const data = async () => {
    return await(
       fetch(weatherAPI + zipCode + weatherCreds)
       .then(result => JSON.stringify(result))
       .catch((e) => console.log(e))
    );
  }
  return (
    <React.Fragment>
      <Forecast {...data}></Forecast>
      <hr/>
      <Form {...{handleSubmit, handleZipcodeChange, buttonText}}></Form>
    </React.Fragment>
  );
}

export default App;
