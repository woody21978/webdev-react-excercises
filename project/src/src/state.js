import { store } from 'react-easy-state';

let state = store({
  app: {
    newsAll: null
  },
  // article: {
  //   visible: false
  // },
  admin: {
    inputAuthor: '',
    inputText: '',
    authorIsEmpty: true,
    textIsEmpty: true
  }
});

export default state;