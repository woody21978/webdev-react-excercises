import React from "react";
import Article from './Article.jsx';

class News extends React.Component {
  render() {
    let data = this.props.data;
    let template;
    let status;
      if (data instanceof Array) {
        status = true;
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
        status = false;
        template = <p>Загружаю Новости...</p>
      }

    return (
      <div className="cards">
        {template}
        <p className={status ? data.length > 0 ? '' : 'none' : 'none'}>Количество новостей: {status ? data.length : null}</p>
      </div>
    );
  }
}

export default News;