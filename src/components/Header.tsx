import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
function Header() {
  const logoutButton = require('../assets/logout-button.png');
  const navigate = useNavigate();

  function logout() {
    firebase.auth().signOut();
    navigate('signup');
  }

  return (
    <div className="flex justify-center items-center">
      <div className="text-purple-300 text-3xl flex-1 ml-36 ">Asgard</div>
      <img
        onClick={() => logout()}
        className=" w-1/12 h-1/12 max-w-full"
        src={logoutButton}
        alt="Logout Button"
      />
    </div>
  );
}

export default Header;
