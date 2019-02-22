import React from 'react';
import ProfileSections from './ProfileSections';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import charityFrogImg from '../assets/images/charityFrog.png';
import foorSavor from '../assets/images/foodSavor.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 6,
    margin: '5px'
  },
});

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

              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>

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
