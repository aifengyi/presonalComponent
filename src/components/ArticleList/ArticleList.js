import React from 'react';
import styles from './articleList.scss';
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail.js';

export default class ArticleList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ArticleThumbnail />
        <ArticleThumbnail />
        <ArticleThumbnail />
        <ArticleThumbnail />
      </div>
    );
  }
}

