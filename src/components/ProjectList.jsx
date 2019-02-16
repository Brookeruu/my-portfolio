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
import CharityFrogImg from '/Users/brookeperry/desktop/Devs/react/my-portfolio/src/assets/charityFrog.png';

const masterListProjects = [
  {
    title: 'Charity Frog',
    image: '../assests/charityFrog.png',
    technologies: 'Ruby / Rails',
    brief: "Nonprofit donation site for Portland"
  },
  {
    title: 'Example #2',
    image: '../assests/charityFrog.png',
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

function ProjectList() {

    return(
      <div>
        <p>Project List is working</p>
        <div style={projectsGrid}>

            <img src="CharityFrogImg"></img>
          </div>

      </div>
    )

  }

export default ProjectList;