// @ts-nocheck
/* eslint react/prop-types: 0 */
import React, { ReactChild, useContext, useState } from 'react';

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}
export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}
function AuthProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  function toggleIsAuthenticated(value) {
    setisAuthenticated(value);
  }
  function setUser(value) {
    setCurrentUser(value);
  }

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <AuthUpdateContext.Provider value={toggleIsAuthenticated}>
        <UserContext.Provider value={currentUser}>
          <UserUpdateContext.Provider value={setUser}>
            {children}
          </UserUpdateContext.Provider>
        </UserContext.Provider>
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
