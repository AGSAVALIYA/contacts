import React from "react";
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ContactInfo from "./Componenets/ContactInfo";

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