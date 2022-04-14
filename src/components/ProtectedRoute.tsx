import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Chat from './Chat';
import { useAuth } from '../context/AuthContext';
import firebase from 'firebase/compat/app';
import Signup from './Signup';
interface ProtectedRouteProps {
  outlet: any;
}

function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const currentUser = useAuth();
  if (currentUser) {
    return outlet;
  } else {
    return <Signup />;
  }
}

export default ProtectedRoute;
