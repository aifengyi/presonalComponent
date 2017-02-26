import React from 'react';
// import Nav from './components/Nav/Nav.js';
// import Banner from './components/Banner/Banner.js';
import Search_js from './components/Search/Search_js.js';
import Search from './components/Search/Search.js';
import Search_txsp from './components/Search/Search_txsp.js';

// import ArticleList from './components/ArticleList/ArticleList.js';
// import Article from './components/Article/Article.js';
// import Editor from './components/Editor/Editor.js';

export default class App extends React.Component {
  render() {
    return (
    	<div>
        <div style={{'marginTop': 60, 'marginLeft':120}}>
        	<Search />
        </div>
        <div style={{'marginTop': 60, 'marginLeft':120}}>
        	<Search_js />
        </div>
        <div style={{'marginTop': 60, 'marginLeft':120}}>
        	<Search_txsp />
        </div>
        </div>
    );
  }
}

//<div style={{padding: 100}}>