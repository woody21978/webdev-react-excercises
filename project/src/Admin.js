import React from 'react';
import './App.css';

const getData = async function (url) {
  const response = await fetch(url);

  // if (!response.ok) {
  //   throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  // }
  console.log(await response.json());
  return await response.json();
}


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAuthor: '',
      inputText: '',
      authorIsEmpty: true,
      textIsEmpty: true
    };
    this.updateAuthorValue = this.updateAuthorValue.bind(this);
    this.updateTextValue = this.updateTextValue.bind(this);
    this.BtnClick = this.BtnClick.bind(this);
  }
  updateAuthorValue(e) {
    this.setState({
      inputAuthor: e.target.value
    })
    if (e.target.value.trim().length > 0) {
      this.setState({
        authorIsEmpty: false
      })
    } else {
      this.setState({
        authorIsEmpty: true
      })
    }
  }
  updateTextValue(e) {
    this.setState({
      inputText: e.target.value
    })
    if (e.target.value.trim().length > 0) {
      this.setState({
        textIsEmpty: false
      })
    } else {
      this.setState({
        textIsEmpty: true
      })
    }
  }
  BtnClick(e) {
    e.preventDefault();
    const author = this.state.inputAuthor;
    const text = this.state.inputText;
    const data = {
      author: author,
      text: text
    };
    getData('http://localhost:80/test.js').then(function (data) {
      console.log(data);
    });
    fetch('http://localhost:80/add-news', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (res.ok) {
          console.log('ok');
        } else {
          console.log('Ответ сервера ' + res.status + ': ' + res.statusText);
        }
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  render() {
    return (
      <div className="container">
        <form className="add">
          <label>Автор:</label>
          <input type="text" className="add__author" value={this.state.inputAuthor} onChange={this.updateAuthorValue} />
          <label>Новость:</label>
          <textarea className="add__text" value={this.state.inputText} onChange={this.updateTextValue} ></textarea>
          <button className="add__btn" onClick={this.BtnClick} disabled={this.state.authorIsEmpty || this.statetextIsEmpty}>Опубликовать</button>
        </form>
      </div>
    );
  }
}

export default Admin;

