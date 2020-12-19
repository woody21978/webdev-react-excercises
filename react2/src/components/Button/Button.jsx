import React from 'react';
import './Button.scss';

function Button({ status, onClickValidation }) {
  return (
    <button
      type="button"
      className="form__button"
      onClick={() => {
        if (!status) onClickValidation();
      }}
    >
      {status ? 'Отправить код' : 'Получить код'}
    </button>
  );
}

export default Button;
