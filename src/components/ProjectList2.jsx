import React from 'react';
import ProfileSections from './ProfileSections';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AboutMe from './AboutMe';
import charityFrogImg from '../assets/images/charityFrog.png';
import foodSavor from '../assets/images/foodSavor.png';
import carbonFootprint from '../assets/images/carbonFootprint.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    height: '100%',
    // color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 6,
    boxShadow: 'none',
    backgroundColor: '#FDFDFD'
  },
});

const images = {
  height: '200px',
  width: '400px'
}

class ProjectList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        direction: 'column',
        justify: 'center',
        alignItems: 'center'
      };

    this.handleChange = key => (event, value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return (
      <Grid container className={classes.root}>

        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>

              <AboutMe />

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
              <img className={images} src={foodSavor}
              style={{
                width: '100%'
              }}></img>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>

              <img className={images} src={charityFrogImg}
              style={{
                width: '100%'
              }}></img>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>

              <img className={images} src={carbonFootprint}
              style={{
                width: '100%'
              }}></img>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>


    );
  }
}

ProjectList2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList2);
