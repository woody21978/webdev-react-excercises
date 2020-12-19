import React from 'react';
import './Form.scss';

function Form({ children }) {
  return (
    <form action="" className="form">
      <h1 className="form__title">Ваш номер телефона</h1>
      {children}
    </form>
  );
}

export default Form;
