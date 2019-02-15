import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function ProfileSections(props) {
  let testCSS = {
    color: 'seaGreen'
  }
  return(
    <h2 style={testCSS} elevation={1} >
      <Typography>
        {props.section}
      </Typography>
    </h2>
  );
}

ProfileSections.propTypes = {
  section: PropTypes.string
};

export default ProfileSections;