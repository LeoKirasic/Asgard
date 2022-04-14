import React from 'react';
import { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { uiConfig } from '../firebase';
import { useAuth, useAuthUpdate, useUserUpdate } from '../context/AuthContext';
import { Link } from 'react-router-dom';
function Signup() {
  const isAuthenticated = useAuth();
  const setisAuthenticated = useAuthUpdate();
  const setCurrentUser = useUserUpdate();
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        // @ts-ignore
        setisAuthenticated(!!user);
        // @ts-ignore
        setCurrentUser(user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isAuthenticated) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  } else {
    return (
      <div>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        <Link to="/">Chat</Link>
      </div>
    );
  }
}

export default Signup;
