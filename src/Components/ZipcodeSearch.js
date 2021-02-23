import React from 'react';

const ZipcodeSearch = (props) => {
  const { inputText, defaultZipcode, handleZipcodeChange } = props;
  return (
    <div className="zipcode-search">
      <input type="text" value={inputText} onChange={ handleZipcodeChange } placeholder={defaultZipcode} />
    </div>
  )
}
export default ZipcodeSearch;
