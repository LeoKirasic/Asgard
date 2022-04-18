import React, { ReactChild, useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
const AuthContext = React.createContext<boolean>(false);
//@ts-ignore
const AuthUpdateContext = React.createContext();

const UserContext = React.createContext<firebase.User | object>({});

const UserUpdateContext = React.createContext<firebase.User | object>({});

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
function AuthProvider({ children }: any) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function toggleIsAuthenticated(value: boolean) {
    setisAuthenticated(value);
  }
  function setUser(value: object) {
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
