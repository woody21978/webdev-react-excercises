import PropTypes from 'prop-types';
import Article from './Article.jsx';

// News.propTypes = {
//   data: PropTypes.array.isRequired
// }
Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigtext: PropTypes.string.isRequired
  })
}