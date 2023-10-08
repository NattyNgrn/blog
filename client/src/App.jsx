import {Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';
import HomePage from './pages/homePage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )
};

export default App
