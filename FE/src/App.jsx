import { Routes, Route, Navigate } from 'react-router-dom';
import ToDoListPage from './pages/ToDoListPage.jsx';
import NewTaskPage from './pages/NewTaskPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Header from "./components/Header.jsx"
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/*" element={<Navigate replace to="/login" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/todolist" element={<ToDoListPage />} />

        <Route path="/newtask" element={<NewTaskPage />} />
      </Routes>

    </>
  )
}

export default App
