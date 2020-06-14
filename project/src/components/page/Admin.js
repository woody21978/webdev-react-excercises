import React from 'react';
import '../../css/App.css';
import { view } from 'react-easy-state';
import state from '../../state.js';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.updateAuthorValue = this.updateAuthorValue.bind(this);
    this.updateTextValue = this.updateTextValue.bind(this);
    this.BtnClick = this.BtnClick.bind(this);
  }
  updateAuthorValue(e) {
    state.admin.inputAuthor = e.target.value;
    if (e.target.value.trim().length > 0) {
      state.admin.authorIsEmpty = false;
    } else {
      state.admin.authorIsEmpty = true;
    }
  }
  updateTextValue(e) {
    state.admin.inputText = e.target.value;
    if (e.target.value.trim().length > 0) {
      state.admin.textIsEmpty = false;
    } else {
      state.admin.textIsEmpty = true;
    }
  }
  BtnClick(e) {
    e.preventDefault();
    const author = state.admin.inputAuthor.trim();
    const text = state.admin.inputText.trim();
    const textLength = text.length;
    if (textLength >= 70) {
      const percent = Math.floor((textLength * 80) / 100);
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
            state.admin.inputAuthor = '';
            state.admin.inputText = '';
            state.admin.authorIsEmpty = true;
            state.admin.textIsEmpty = true;
          } else {
            console.log('Ответ сервера ' + res.status + ': ' + res.statusText);
          }
        })
        .catch(function (res) {
          console.log(res);
        });
    } else {
      state.admin.inputText = '';
      state.admin.textIsEmpty = true;
      alert('Ваш текст состовляет меньше 70 символов');
    }

  }
  render() {
    return (
      <div className="container">
        <form className="add">
          <label>Автор:</label>
          <input type="text" className="add__author" value={state.admin.inputAuthor} onChange={this.updateAuthorValue} />
          <label>Новость:</label>
          <textarea className="add__text" value={state.admin.inputText} onChange={this.updateTextValue} placeholder="Не менее 70 символов"></textarea>
          <button className="add__btn" onClick={this.BtnClick} disabled={state.admin.authorIsEmpty || state.admin.textIsEmpty}>Опубликовать</button>
        </form>
      </div>
    );
  }
}

export default view(Admin);

