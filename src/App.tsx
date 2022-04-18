import React from 'react';
import Signup from './components/Signup';
import Chat from './components/Chat';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import Header from './components/Header';
function App() {
  return (
    <div className="flex flex-col items-center bg-background2 ml-6 mr-6 rounded-md">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<ProtectedRoute outlet={<Chat />} />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
