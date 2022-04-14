import React from 'react';

function Header() {
  const logoutButton = require('../assets/logout-button.png');

  return (
    <div className="flex justify-center items-center">
      <div className="text-purple-300 text-3xl flex-1 ml-36 ">Asgard</div>
      <img
        className=" w-1/12 h-1/12 max-w-full"
        src={logoutButton}
        alt="Logout Button"
      />
    </div>
  );
}

export default Header;
