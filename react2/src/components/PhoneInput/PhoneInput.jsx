import React from 'react';
import './PhoneInput.scss';
import Cleave from 'cleave.js/react';

function Input({ value, disableStatus, onChangeInput }) {
  return (
    <Cleave
      placeholder="+7 (###) ### - ## - ##"
      options={{
        numericOnly: true,
        delimiters: ['+', '7 ', '(', ') ', ' - ', ' - '],
        blocks: [0, 0, 0, 3, 3, 2, 2],
      }}
      className="form__input"
      value={value}
      onChange={(event) => {
        onChangeInput(event.target.rawValue);
      }}
      disabled={disableStatus}
    />
  );
}

export default Input;
