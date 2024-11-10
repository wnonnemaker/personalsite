
import './styles/App.css';
import Home from './pages/Home'
import NewArticleForm from './pages/NewArticleForm';
import Login from './pages/Login';
import Admin from './pages/Admin';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet, BrowserRouter } from 'react-router-dom';
import ArticleDisplay from './components/ArticleDisplay';



function App() {



  return (
    
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />}></Route>
            <Route path="/article/:id" element = {<ArticleDisplay />}> </Route>
            <Route path= "/login" element = {<Login />}> </Route>
            <Route path= "/admin" element = {<Admin />}> 
            
            </Route>
        </Routes>
      </BrowserRouter>
      

  );
}

export default App;
