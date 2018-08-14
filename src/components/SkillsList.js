import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
    minWidth: 275,
    marginBottom: 15
  },
  noselectText: {
    fontWeight: 500
  },
  expansionHeading: {
    color: '#323232'
  },
  button: {
    backgroundColor: '#FFB100',
    textTransform: 'none',
    padding: '10px 25px'
  },
  grid: {
    margin: '0 auto'
  }
};

function SkillsList(props) {
  const { classes } = props;
  return (
    <div>
      <Grid item md={4} className={classes.grid}>
        <Card className={classes.card}>
          <CardContent>
            <p className="lead"><span className={classes.noselectText}>No skilss selected</span></p>
            <ExpansionPanel>
               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                 <p className={classes.expansionHeading}>Accounting, banking and insurance skills</p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                   sit amet blandit leo lobortis eget.
                 </p>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <p className={classes.expansionHeading}>Human resources skills</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider />
              <Button variant="extendedFab"  className={classes.button}>
                Save and Continue
              </Button>
          </CardContent>
        </Card>
      </Grid>
    </div>

  );
}

SkillsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsList);
