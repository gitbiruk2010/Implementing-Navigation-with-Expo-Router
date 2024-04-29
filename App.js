import React from 'react';
import { NativeRouter as Router, Routes, Route } from 'react-router-native';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserProfilePage from './pages/UserProfilePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}
