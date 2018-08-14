import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


const styles = {
  card: {
    minWidth: 275,
    border: '1px solid #ff3939',
    backgroundColor: '#FFEDED',
    marginBottom: 15
  },
  grid: {
    margin: '0 auto'
  }
};

function ValidationErrors(props) {
  const { classes } = props;
  return (
    <div>
    <Grid item md={4} className={classes.grid}>
        <Card className={classes.card}>
          <CardContent>
            <h3 className="lead">Whoops!</h3>
            <p className="lead">Make sure you have selected at least 5 skills.</p>
          </CardContent>
        </Card>
      </Grid>
    </div>

  );
}

ValidationErrors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValidationErrors);
