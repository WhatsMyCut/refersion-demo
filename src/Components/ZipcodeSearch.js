/* eslint-disable jsx-a11y/aria-role */
import React from 'react';

const ZipcodeSearch = (props) => {
  const { inputText, defaultZipcode, handleZipcodeChange } = props;
  return (
    <div className="zipcode-search">
      <input role="input" id="zipcode-search" type="text" value={inputText} onChange={ handleZipcodeChange } placeholder={defaultZipcode} />
    </div>
  )
}
export default ZipcodeSearch;
