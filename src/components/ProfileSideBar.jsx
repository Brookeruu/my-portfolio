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
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectList2 from './ProjectList2';
import brooke2 from '../assets/images/squareProfile.png';
import succulents from '../assets/images/succulents.jpg';


const drawerWidth = 360;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: '360',
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    texAlign: 'center',
    paddingLeft: '20px',
    backgroundColor: '#F1F0F1'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: '360px',
    height: '100%',
    width: '100%',
    maxWidth: '1200px',
    flexGrow: 1,
    backgroundColor: '#FDFDFD',
    marginTop: '0',
    // padding: theme.spacing.unit * 3,
    paddingTop: '0',

    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    // padding: '100px'
  },
});


const listForSidebar = [
  {
   section: "Full Stack Web Developer"
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

const succulentImage = {
  resizeMode: 'cover',
  maxWidth: '1200px',
  overflow: 'visible'
}


function ProfileSideBar(props) {

  const { classes } = props;

  return (
     <div className={classes.root}>
       <Drawer
         className={classes.drawer}
         variant="permanent"
         classes={{
           paper: classes.drawerPaper,
         }}
         anchor="left">

         <div >
           <div>
           <img  src={brooke2}
           style={{
             width: '200px',
             borderRadius: '50%',
             alignItems: 'center',
             display: 'block',
             marginLeft: 'auto',
             marginRight: 'auto',
             justify: 'center'
           }}></img>
           </div>

           <h1
           style={{
             color: '#373F51',
             fontSize: '50px',
             fontFamily: 'Roboto'
           }}>
           Brooke Perry
           </h1>
           {listForSidebar.map((title, index) =>
             <ProfileSections
               section={title.section}
               key={index}
               />
             )}
           </div>
         </Drawer>

       <main className={classes.content}>

       <img style={succulentImage} src={succulents} alt="succulents"></img>

       <div style={{margin: '100px'}}>
        <div className={classes.toolbar} />



          <Typography paragraph>
            Portfolio Stuff
          </Typography>
          <Link to="/">ProfileSideBarlink</Link>

          <ProjectList2 />
        </div>
      </main>
     </div>

  );
}

ProfileSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSideBar);
