import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { dummyUsers } from '../data/dummyUsers';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
 
    if (!formData.username || !formData.currentPassword || 
        !formData.newPassword || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const userIndex = dummyUsers.findIndex(
      user => user.username === formData.username && 
             user.password === formData.currentPassword
    );

    if (userIndex === -1) {
      setError('Invalid username or current password');
      return;
    }

    dummyUsers[userIndex].password = formData.newPassword;
    
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  if (success) {
    return (
      <div className="auth-form">
        <h2>Password Changed Successfully!</h2>
        <p>You will be redirected to the login page shortly.</p>
      </div>
    );
  }

  return (
    <div className="auth-form">
      <h2>Change Password</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onFocus={() => setError('')}
          />
        </div>
        <div className="form-group">
          <label>Current Password:</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            onFocus={() => setError('')}
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            onFocus={() => setError('')}
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onFocus={() => setError('')}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
      <p>
        Remember your password? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default ChangePassword;