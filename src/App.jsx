//import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import ToDoListPage from './pages/ToDoListPage.jsx';
import NewTaskPage from './pages/NewTaskPage.jsx';
import HomePage from './pages/HomePage.jsx';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx"
import './App.css'

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />

        <Route path="/home/*" element={<HomePage />} />

        <Route path="/todolist" element={<ToDoListPage />} />

        <Route path="/newtask" element={<NewTaskPage />} />
      </Routes>

    </>
  )
}

export default App
