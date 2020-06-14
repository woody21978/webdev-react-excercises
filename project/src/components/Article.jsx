import React from "react";
// import { view } from 'react-easy-state';
// import state from '../state.js';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.updateVisible = this.updateVisible.bind(this);
 }
  updateVisible() {
    // state.article.visible = true;
    this.setState({
      visible: true
    });
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
        <a href="# " className={"card__readmore " + (visible ? 'none' : '')} onClick={this.updateVisible}>Подробнее</a>
        <p className={"card__big-text " + (visible ? '' : 'none')}>{bigtext}</p>
      </div>
    )
  }
}

export default Article;