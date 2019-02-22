import React from 'react';
import ProfileSections from './ProfileSections';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    padding: theme.spacing.unit * 4,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class InteractiveGrid extends React.Component {
  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
    gridGap: '20'
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    const code = `
\`\`\`jsx
<Grid
  container
  direction="${direction}"
  justify="${justify}"
  alignItems="${alignItems}"
>
\`\`\`
`;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={40}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper
                  className={classes.paper}
                  style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
                >
                  {`Cell ${value + 3}`}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <MarkdownElement text={code} />
        </Grid>
      </Grid>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);
