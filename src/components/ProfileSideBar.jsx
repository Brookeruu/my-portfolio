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


const drawerWidth = 360;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: '360',
    flexShrink: 0,
    backgroundColor: '#DDDFE1'

  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    texAlign: 'center',
    paddingLeft: '20px',
    backgroundColor: '#DDDFE1'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: '360px',
    height: '100%',
    flexGrow: 1,
    backgroundColor: '#FDFDFD',
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    padding: '100px'
  },
});


const listForSidebar = [
  {
   section: "Frontend Web Developer"
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
  const { classes } = props;

  return (
     <div className={classes.root}>
       <Drawer
         className={classes.drawer}
         variant="permanent"
         classes={{
           paper: classes.drawerPaper,
         }}
         anchor="left"
       >
         <div >
         <h1
         style={{
           color: '#373F51',
           fontSize: '50px',
           fontFamily: 'Roboto'
         }}
         >Brooke Perry</h1>
               {listForSidebar.map((title, index) =>
                 <ProfileSections
                   section={title.section}
                   key={index}
                   />
                 )}
           </div>

       </Drawer>
       <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          About Me Section
          Honing in on my skills as a web developer after years of working in Education Administration. Finding ways to combine my experience and passion for international language with programming languages.

        </Typography>
        <Typography paragraph>
          Portfolio Stuff
        </Typography>
        <Link to="/">ProfileSideBarlink</Link> | <Link to="/Year">Month by month avails</Link>
        <ProjectList />
      </main>
     </div>

  );
}

ProfileSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSideBar);
