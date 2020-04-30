var Button = React.createClass({
  render: function () {
    return (
      <div className="buttons">
        <input type="submit" className="form__btn" onClick={this.props.receiveCode} value={this.props.visible ? 'Отправить код' : 'Получить код'} />
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      visible: false,
      phone: '',
      phoneValid: null
    }
  },
  receiveCode: function (e) {
    e.preventDefault();
    var phone = this.state.phone;
    var phoneValid = this.state.phoneValid;
    if (phone.length >= 22) {
      this.setState({
        visible: true,
        phoneValid: false
      })
    } else {
      this.setState({
        visible: false,
        phoneValid: true
      })
    }
  },
  getphone: function (e) {
    this.setState({
      phoneValue: e.target.rawVvalue,
      phone: e.target.value
    })
  },
  render: function () {
    var visible = this.state.visible;
    var phone = this.state.phone;
    var phoneValid = this.state.phoneValid;
    if (visible) {
      return (
        <form className="form">
          <h1 className="form__title">React</h1>
          <div className="form-wrap">
            <label>Ваш номер телефона</label>
            <input className="form__input" placeholder="+7 (###) ### - ## - ##" value={phone} disabled />
            <label>Код</label>
            <input className="form__input" placeholder="Код" />
            <Button visible={this.state.visible} receiveCode={this.receiveCode} />
          </div>
        </form>
      );
    } else {
      return (
        <form className="form">
          <h1 className="form__title">React</h1>
          <div className="form-wrap">
            <label>Ваш номер телефона</label>
            <Cleave className={'form__input' + (phoneValid ? ' error': '')} onChange={this.getphone} options={{ delimiters: ['+', '7 ', '(', ') ', ' - ', ' - '], blocks: [0, 0, 0, 3, 3, 2, 2] }} placeholder="+7 (###) ### - ## - ##" />
            <Button visible={this.state.visible} receiveCode={this.receiveCode} phone={this.state.phone} />
          </div>
        </form>
      );
    }
  }
});

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);