import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import Levels from "./pages/Levels/Levels";
import Projects from "./pages/Projects/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Levels />} exact />
        <Route path="/projects" element={<Projects />} exact />
      </Routes>
  </BrowserRouter>
);
