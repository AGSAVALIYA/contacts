import React from "react";
import { Routes, Route } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import App from './App';

const RoutedApp = () => {
    return (
        
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/:id" element={<ContactInfo />} />
          </Route>
          <Route path="*" element={<App />} />
        </Routes>
      
    );
}
export default RoutedApp;