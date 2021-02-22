import Button from './Button';
import React from 'react';
import ZipcodeSearch from './ZipcodeSearch';

export const Form = (props) => {
  const { buttonText, handleSubmit, handleZipcodeChange } = props;
  return (
    <>
    <div className="form-input-label">Zip Code:</div>
    <ZipcodeSearch handleZipcodeChange={handleZipcodeChange}/>
    <Button buttonText={buttonText} handleSubmit={handleSubmit}/>
    </>
  )

}
export default Form;
