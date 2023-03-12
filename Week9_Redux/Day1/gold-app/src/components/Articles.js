import React from 'react';
import { useSelector } from 'react-redux';

const Articles = () => {
    const articles = useSelector(state => state.articles.articles)
    const searchTerm = useSelector(state => state.searchTerm)
    console.log(articles, searchTerm)
    return (
        <ul>
            {articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase())).map(article => <li key={article.id}><a href={article.url}>{article.title}</a></li>)}
        </ul>
    );
};

export default Articles;