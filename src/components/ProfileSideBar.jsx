import React from 'react';
import ProfileSections from './ProfileSections';
import PropTypes from 'prop-types';

const listForSidebar = [
  {
    section: "Brooke Perry"
  },
  {
    section: "Frontend Web Developer"
  },
  {
    section: "Home"
  },
  {
    section: "About"
  },
  {
    section: "Portfolio"
  },
  {
    section: "Skills"
  },
  {
    section: "Experience"
  },
  {
    section: "Contact"
  }
];

 
function ProfileSideBar(props) {


  return(
    <div>
      <p>testing</p>
        {listForSidebar.map((title, index) =>
          <ProfileSections
            section={title.section}
            key={index}
            />
          )}
    </div>
  );
}

export default ProfileSideBar;