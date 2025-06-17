import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ChatbotProject from './pages/ChatbotProject.jsx';
import CourseApp from './pages/CourseApp.jsx';
import CafeManagement from './pages/Cafe Management System.jsx';
import Restaurant from './pages/Restaurant.jsx';
import Toxic from './pages/Toxic Comment.jsx';
import './index.css'; 
import OtherWork from './pages/OtherWork.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/chatbot" element={<ChatbotProject />} />
        <Route path="/projects/course-app" element={<CourseApp />} />
        <Route path="/projects/restaurant-system" element={<Restaurant />} />
        <Route path="/projects/cafe-system" element={<CafeManagement />} />
        <Route path="/projects/toxic-api" element={<Toxic />} />
        <Route path="/projects/home" element={<App />} />
        <Route path="/projects/other-work" element={<OtherWork />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
