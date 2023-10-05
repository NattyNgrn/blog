import {Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';
import HomePage from './pages/homePage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProfilePage />} />
        <Route path="/about" element={<LoginPage />} />
      </Routes>
    </div>
  )
};

export default App
