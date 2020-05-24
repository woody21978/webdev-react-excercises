import React from 'react';
import './App.css';

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
    const author = this.state.inputAuthor.trim();
    const text = this.state.inputText.trim();
    const n = text.length;
    if (n >= 70) {
      const percent = Math.floor((n * 80) / 100);
      const smallText = text.slice(0, percent) + '...';
      const data = {
        author: author,
        text: smallText,
        bigtext: text
      };
      fetch('http://localhost:80/add-news', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res) {
            this.setState({
              inputAuthor: '',
              inputText: '',
              authorIsEmpty: true,
              textIsEmpty: true
            });
          } else {
            console.log('Ответ сервера ' + res.status + ': ' + res.statusText);
          }
        })
        .catch(function (res) {
          console.log(res);
        });
    } else {
      this.setState({
        inputText: '',
        textIsEmpty: true
      });
      alert('Ваш текст состовляет меньше 70 символов');
    }

  }
  render() {
    return (
      <div className="container">
        <form className="add">
          <label>Автор:</label>
          <input type="text" className="add__author" value={this.state.inputAuthor} onChange={this.updateAuthorValue} />
          <label>Новость:</label>
          <textarea className="add__text" value={this.state.inputText} onChange={this.updateTextValue} placeholder="Не менее 70 символов"></textarea>
          <button className="add__btn" onClick={this.BtnClick} disabled={this.state.authorIsEmpty || this.statetextIsEmpty}>Опубликовать</button>
        </form>
      </div>
    );
  }
}

export default Admin;

