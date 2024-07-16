import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDisplay = () => {

    const {id} = useParams() 
    const [article, setArticles] = useState([]);

    useEffect(() => {
        // Load articles from local storage or initialize with some articles
        const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
        const foundArticle = storedArticles.find(article => article.id == parseInt(id))
        setArticles(foundArticle);
      }, [id]);

    

    return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      );

  }; 

  export default ArticleDisplay;