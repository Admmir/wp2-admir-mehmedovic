import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import NewsDetailPage from './pages/NewsDetailPage';
import './App.css';
import ChangePasswordPage from './pages/ChangePasswordPage';

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;