import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import GamesPage from './pages/games.page';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: 'block'
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: '40px 16px'
  }
});

const Routes = ({ classes }) => (
  <Paper className={classes.paper}>
    <Routes>
      <Route exact path="/" component={GamesPage} />
    </Routes>
  </Paper>
);

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
