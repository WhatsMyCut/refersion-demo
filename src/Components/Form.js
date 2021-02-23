import '../Styles/Form.scss';

import Button from './Button';
import React from 'react';
import ZipcodeSearch from './ZipcodeSearch';

export const Form = (props) => {
  const {
    inputText,
    buttonText,
    handleSubmit,
    defaultZipCode,
    handleZipcodeChange
  } = props;
  return (
    <form>
    <div className="form-container">
      <div className="form-input">
        <label className="form-input-label" for="zipcode-search" >Zip Code:</label>
        <ZipcodeSearch {...{inputText, defaultZipCode, handleZipcodeChange}}/>
      </div>
      <Button buttonText={buttonText} handleSubmit={handleSubmit}/>
    </div>
    </form>
  )

}
export default Form;
