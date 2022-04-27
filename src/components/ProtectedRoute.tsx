import React from 'react';
import { useAuth } from '../context/AuthContext';
import Signup from './Signup';
interface ProtectedRouteProps {
  outlet: React.ReactElement;
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
