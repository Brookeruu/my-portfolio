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

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


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
  const { classes } = props;

  return (
     <div className={styles.root}>
       <Drawer
         className={styles.drawer}
         variant="permanent"
         classes={{
           paper: styles.drawerPaper,
         }}
         anchor="left"
       >
         <div className={styles.toolbar} />

         <div>
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
        </Typography>
        <Typography paragraph>
          Portfolio Stuff
        </Typography>
      </main>

     </div>

  );
}

// export default ProfileSideBar;



ProfileSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSideBar);
