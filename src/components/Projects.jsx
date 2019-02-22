import React from 'react';
import ProfileSections from './ProfileSections';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const projectLetterStyle = {
  color: 'green'
}

function Projects(props) {

  return(
    <div style={projectLetterStyle} elevation={1}>
      <p>Project List will go here?</p>
      <Typography style={projectLetterStyle}>

      </Typography>
    </div>
  )

}

Projects.propTypes = {
  title: PropTypes.string ,
  image: PropTypes.string,
  technologies: PropTypes.string,
  brief: PropTypes.string
}
export default Projects;
