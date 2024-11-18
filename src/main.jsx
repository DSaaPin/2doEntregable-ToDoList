//import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TasksProvider } from './context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <TasksProvider>
            <App />
        </TasksProvider>
    </React.StrictMode>
  </Router>
);
