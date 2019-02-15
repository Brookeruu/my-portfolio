import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
    <div style={{marginLeft: '240px'}}>

      <Link to="/">ProfileSideBarlink</Link> | <Link to="/Year">Month by month avails</Link>
    </div>
    </div>
  );
}

export default Header;
