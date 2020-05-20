import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

let news = require('./data.json');
// let news = [];
// fetch('http://localhost:80/read')

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.updateVisible = this.updateVisible.bind(this);
  }
  updateVisible() {
    this.setState({ visible: true });
  }
  render() {
    let author = this.props.data.author;
    let text = this.props.data.text;
    let bigtext = this.props.data.bigtext;
    let visible = this.state.visible;
    return (
      <div className="article">
        <p className="card__author">{author}</p>
        <p className="card__text">{text}</p>
        <a href="#" className={"card__readmore " + (visible ? 'none' : '')} onClick={this.updateVisible}>Подробнее</a>
        <p className={"card__big-text " + (visible ? '' : 'none')}>{bigtext}</p>
      </div>
    )
  }
}

class News extends React.Component {
  render() {
    let data = this.props.data;
    let template;

    if (data.length > 0) {
      template = data.map(function (item, index) {
        return (
          <div key={index} className="card">
            <Article data={item} />
          </div>
        );
      })
    } else {
      template = <p>Новостей нет :(</p>
    }

    return (
      <div className="cards">
        {template}
        <p className={data.length > 0 ? '' : 'none'}>Количество новостей: {data.length}</p>
      </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
}
Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigtext: PropTypes.string.isRequired
  })
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsAll: news
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Новости</h1>
        <News data={this.state.newsAll} />
      </div>
    );
  }
}

export default App;
