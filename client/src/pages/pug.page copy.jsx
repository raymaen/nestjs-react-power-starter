import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Loading from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pug } from '../model';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const pugPage = ({ pugs }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}></span>;

  if (!pugs) {
    return <Loading />;
  }

  return (
    <Grid container spacing={8}>
      {pugs.map(pug => (
        <Grid item md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {pug.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {pug.age} years of age
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {pug.type} type
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  pugs: state.pugs
});

pugPage.propTypes = {
  pugs: PropTypes.arrayOf(Pug).isRequired
};

export default connect(mapStateToProps)(pugPage);
