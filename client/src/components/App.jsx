import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import PropTypes from 'prop-types';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import theme from '../theme';
import Routes from '../routes';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navigator from './layout/Navigator';
import Notifications from './common/Notifications';

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1'
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1'
  }
};

const App = ({ classes }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <Routes />
            </main>
            <footer className={classes.footer}>
              <Footer />
            </footer>
          </div>
          <Notifications />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
