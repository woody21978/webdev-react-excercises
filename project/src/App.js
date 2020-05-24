import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

// let news = require('./data.json');
/* ========== ВАРИАНТ 1 ========== */
// let news;
// async function getNewsAsync(name) 
// {
//   let response = await fetch(`http://localhost:80/${name}`);
//   let data = await response.json()
//   return data;
// }
// getNewsAsync('read')
//   .then((data) => {
//     let news = data;
//   });
/* ========== ВАРИАНТ 2 ========== */
// async function getNewsData() {
//   let news;
//   try {
//     await fetch('http://localhost:80/read', {
//       method: 'POST'
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         news = data;
//         return news;
//       });
//   } catch (err) {
//     console.error(err);
//   }
// }
/* ========== ВАРИАНТ 3 ========== */
// fetch('http://localhost:80/read', {
//   method: 'post'
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     news = data;
//     console.log(news);
//   });
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
    if (data) {
      if (data instanceof Array) {
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
      } else {
        template = <h3>Загружаю Новости...</h3>
      }
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
      newsAll: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:80/read', {
      method: 'post'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        var news;
        news = data;
        this.setState({ newsAll: news });
        console.log(news);
      });
  }
  render() {
    return (
      <div className="container" >
        <h1 className="title">Новости</h1>
        <News data={this.state.newsAll} />
      </div>
    );
  }
}

export default App;
