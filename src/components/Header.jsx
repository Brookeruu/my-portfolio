import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      
      <Link to="/">ProfileSideBarlink</Link> | <Link to="/Year">Month by month avails</Link>
    </div>
  );
}

export default Header;
