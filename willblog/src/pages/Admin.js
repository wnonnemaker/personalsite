
import '../App.css';
import React, { useState, useEffect } from 'react';
import { useParams, BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div> 
    <div>
        this is a webpage
        
    </div>
      <nav>
      <ul>
        <li >
          <Link to = "/new-article"> <button>New Article</button> </Link>
        </li>
      </ul>
      
    </nav>

    </div>
    
  );
};

export default Admin;