import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';



const styles = {
  card: {
    minWidth: 275,
    marginBottom: 15
  },
  grid: {
    margin: '0 auto'
  }
};

function SkillsChosen(props) {
  const { classes, options } = props;
  const selectedSkills = options.map((option) =>
      <span key={option}>
      {option}<br/>
      </span>
  );
  return (
    <div>
      <Grid item md={4} className={classes.grid}>
        <Card className={classes.card}>
          <CardContent>
            <h3 className="lead">Thank you!</h3>
            <p className="lead" style={{marginBottom: '15px'}}>The skills you chose were: </p>
            <p className="lead">{selectedSkills}</p>
          </CardContent>
        </Card>
      </Grid>
    </div>

  );
}

SkillsChosen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsChosen);
