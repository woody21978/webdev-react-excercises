import React, { useState } from 'react';
import Form from '../components/Form/Form';
import PhoneInput from '../components/PhoneInput/PhoneInput';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

function AppContainer() {
  const [phoneValue, setPhoneValue] = useState('');
  const [statusForm, setStatusForm] = useState(false);
  const phoneChange = (value) => setPhoneValue(value);
  const ButtonChange = (status) => setStatusForm(status);
  const validationPhone = () => {
    if (phoneValue.length === 10) {
      ButtonChange(true);
    } else {
      ButtonChange(false);
    }
  };

  return (
    <>
      <Form>
        <PhoneInput
          value={phoneValue}
          disableStatus={statusForm}
          onChangeInput={phoneChange}
        />
        {statusForm && <Input />}
        <Button status={statusForm} onClickValidation={validationPhone} />
      </Form>
    </>
  );
}

export default AppContainer;
