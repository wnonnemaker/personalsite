
import './App.css';
import Home from './pages/Home'
import NewArticleForm from './pages/NewArticleForm';
import Login from './pages/Login';
import Admin from './pages/Admin';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet, BrowserRouter } from 'react-router-dom';
import ArticleDisplay from './components/ArticleDisplay';



function App() {


  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Load articles from local storage or initialize with some articles
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    setArticles(storedArticles);
  }, []);

  const addArticle = (title, subtitle, content, dateCreated) => {
    const newArticle = { title, subtitle, content, dateCreated, id: articles.length + 1 };
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
  };

  //video player things
  //all the html stuff


  return (
    
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home articles = {articles} />}></Route>
            <Route path="/new-article" element={<NewArticleForm addArticle={addArticle} />}> </Route>
            <Route path="/article/:id" element = {<ArticleDisplay />}> </Route>
            <Route path= "/login" element = {<Login />}> </Route>
            <Route path= "/admin" element = {<Admin />}> 
            
            </Route>
        </Routes>
      </BrowserRouter>
      

  );
}

export default App;
