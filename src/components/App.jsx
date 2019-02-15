import React from 'react';
import ProfileSideBar from './ProfileSideBar';
import Year from './Year';
import Header from './Header';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';


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
      <Header />
      <Switch>
        <Route exact path='/' component={ProfileSideBar} />
        <Route path='/Year' component={Year} />
      </Switch>
    </div>
  );
}

export default App;
