import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { TasksProvider } from './context/TaskContext.jsx';
import { UsersProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
    <UsersProvider>
      <TasksProvider>
            <App />
        </TasksProvider>
        </UsersProvider>
    </React.StrictMode>
  </Router>
);
