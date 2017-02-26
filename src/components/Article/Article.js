import React from 'react';
import styles from './article.scss';
import ArticleInfo from '../ArticleInfo/ArticleInfo.js';
import AuthorCard from '../AuthorCard/AuthorCard.js';

export default class Articlethumbnail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.articlePage}>
        <div className={styles.title}>title placeholder</div>
        <ArticleInfo />
        <div className={styles.content}>this is the article content placeholder</div>
        <div className={styles.footer}>
          <AuthorCard />
        </div>
      </div>
    );
  }
}
