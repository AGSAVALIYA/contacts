import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import ContactInfo from './ContactInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/:id" element={<ContactInfo />} />
      </Route>
     <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
