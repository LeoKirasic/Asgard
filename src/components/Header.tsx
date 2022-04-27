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
        className="absolute right-0 top-1 w-8  opacity-90 hover:opacity-100 hover:cursor-pointer lg:w-9 2xl:w-10"
        src={logoutButton}
        alt="Logout Button"
      />
    </div>
  );
}

export default Header;
