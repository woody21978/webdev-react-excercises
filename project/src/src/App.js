import React from 'react';
import './components/Props.jsx';
import './css/App.css';
import { view } from 'react-easy-state';
import state from './state.js';
import './components/Article.jsx';
import News from './components/News.jsx';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:80/read', {
      method: 'post'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var news;
        news = data;
        state.app.newsAll = news;
      })
      .catch((err) => {
        console.log('Не удалось получитьответ от сервера | Ошибка: ' + err);
        state.app.newsAll = [];
      });
  }
  render() {
    return (
      <div className="container" >
        <h1 className="title">Новости</h1>
        <News data={state.app.newsAll} />
      </div>
    );
  }
}

export default view(App);
