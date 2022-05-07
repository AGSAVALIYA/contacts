import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import AuthedRoute from './RouteAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <AuthedRoute/>
  </BrowserRouter>
);

reportWebVitals();
