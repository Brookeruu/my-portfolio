import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const letterStyle = {
  color: '#69626D',
  letterSpacing: '5px'
}

function ProfileSections(props) {
  return(
    <h1 style={letterStyle} elevation={1} >
      <Typography style={letterStyle}>
        {props.section}
      </Typography>
    </h1>
  );
}

ProfileSections.propTypes = {
  section: PropTypes.string
};

export default ProfileSections;
