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
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  // <div className={classes.root}>
  //       <CssBaseline />
  //       <AppBar position="fixed" className={classes.appBar}>
  // 
  //       </AppBar>
  //       <Drawer
  //         className={classes.drawer}
  //         variant="permanent"
  //         classes={{
  //           paper: classes.drawerPaper,
  //         }}
  //         anchor="left"
  //       >
  //         <div className={classes.toolbar} />
  // 
  //         <List>
  //           {listForSidebar.map((title, index) => (
  //             <ListItem  key={index}>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           ))}
  //         </List>
  //         </Drawer>
  //         </div>
  //       );
  //     }
  // 
  // 
  // 
  // 
  
  // 
  // return(
  //   <div>
  //       {listForSidebar.map((title, index) =>
  //         <ProfileSections
  //           section={title.section}
  //           key={index}
  //           />
  //         )}
  //   </div>
  );
}

export default ProfileSideBar;