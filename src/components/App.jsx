import React from 'react';
import ProfileSideBar from './ProfileSideBar';
import Header from './Header';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    useNextVariants: true,
   fontSize: 16,
    }
});

function App(){

  return (
    <div>
    <Helmet>
    <style>{`body { margin: 0}`}</style>
    </Helmet>
      <Header />
      <Switch>
        <Route exact path='/' component={ProfileSideBar} />

      </Switch>
    </div>
  );
}

export default App;
