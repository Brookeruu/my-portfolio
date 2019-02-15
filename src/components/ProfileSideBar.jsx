import React from 'react';
import PropTypes from 'prop-types';

const listForSidebar = [
  {
    title: "Brooke Perry"
  },
  {
    title: "Frontend Web Developer"
  },
  {
    title: "Home"
  },
  {
    title: "About"
  },
  {
    title: "Portfolio"
  },
  {
    title: "Skills"
  },
  {
    title: "Experience"
  },
  {
    title: "Contact"
  }
]


function ProfileSideBar(props) {
  return (
    <div>
      <p>This will be where the profile side bar goes!</p>
    </div>
  )
}

ProfileSideBar.protoTypes = {
  title: PropTypes.string.isRequired
};


export default ProfileSideBar;