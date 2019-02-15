import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function ProfileSections(props) {
  let testCSS = {
    color: 'seaGreen'
  }
  return(
    <Paper style={testCSS} elevation={1} >
      <Typography variant="h5">
        {props.section}
      </Typography>
    </Paper>
  );
}

ProfileSections.propTypes = {
  section: PropTypes.string
};

export default ProfileSections;