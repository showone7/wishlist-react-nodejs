import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/AuthContext';
import { Navibar } from './Navbar';
import '../index.css';

export default function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = AppRouter(isAuthenticated);
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <Router>
        <div class="wrapper">
          {isAuthenticated && <Navibar />}
          <div className="content">{routes}</div>
          <div class="footer">
            <p>
              <a href="mailto:EZaykovskiy@mail.ru">EZaykovskiy@mail.ru</a>, 2020
            </p>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
