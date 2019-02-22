import React from 'react';
import ProfileSections from './ProfileSections';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import charityFrogImg from '../assets/images/charityFrog.png';

const masterListProjects = [
  {
    title: 'Charity Frog',
    image: 'src={charityFrog}',
    technologies: 'Ruby / Rails',
    brief: "Nonprofit donation site for Portland"
  },
  {
    title: 'Example #2',
    image: ' ',
    technologies: 'Angular',
    brief: "Waste less food, search recipes that use ingredients you already have."
  }
]

const projectsGrid = {
  display: 'grid',
  gridGap: '1em',
  gridTemplateColumns: 'repeat(auto-fit, 400px)',
  gridTemplateRows: 'repeat(auto-fit, 800px)',
  justifyContent: 'center'
}

const images = {
  height: '200px',
  width: '400px'
}

function ProjectList(props) {

    const { classes } = props;

    return(
      <div>
        <p>Project List is working</p>
        <div style={projectsGrid}>

            <img className={images} src={charityFrogImg}
            style={{
              width: '800px'
            }}></img>
          </div>

      </div>
    )

  }

export default ProjectList;
