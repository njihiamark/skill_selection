import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    minWidth: 275,
  }
};

function SkillsHeader(props) {
  const { classes } = props;
  return (
    <div>
      <Grid item md={4}>
        <Card className={classes.card}>
          <CardContent>
            <h3 className="lead">Select your skills</h3>
            <p className="lead">Please choose at least 5 most important skills you have</p>
          </CardContent>
        </Card>
      </Grid>
    </div>

  );
}

SkillsHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsHeader);
