import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Levels from "./pages/Levels/Levels";
import Projects from "./pages/Projects/Projects";
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/levels" element={<Levels />} exact />
      <Route path="/projects" element={<Projects />} exact />
    </Routes>
  </BrowserRouter>
);
