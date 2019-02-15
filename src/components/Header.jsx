import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Side Bar Section with links to projects and aboutme</h1>
      <Link to="/">ProfileSideBarlink</Link> | <Link to="/Year">Month by month avails</Link>
    </div>
  );
}

export default Header;
