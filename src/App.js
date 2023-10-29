import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/home';
import LoginPage from './components/login';
import RegisterPage from './components/register/register';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
