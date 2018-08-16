import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
  expansionPanel: {
    margin: '0 24px'

  },
  ExpansionPanelSummary:{
    '&:hover': {
      background: '#f1f1f1'
    }
  },
  expansionHeading: {
    color: '#323232'
  },
  expansionPanelDetails: {
    marginBottom: '15px'
  }
}


function Skill(props) {
  const { classes, data, change } = props;
  const skillComponent = data.map((item) => <div key={item.id}><ExpansionPanel  className={classes.expansionPanel}>
     <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />}>
       <p className={classes.expansionHeading}>{item.category}</p>
     </ExpansionPanelSummary>
     <ExpansionPanelDetails className={classes.expansionPanelDetails}>
       <FormControl component="fieldset" >
         <FormGroup>
            {item.skills.map((skill) => (
              <FormControlLabel key={skill} control={<Checkbox value={skill} onChange={change} /> } label={skill} />
            ))}
         </FormGroup>
       </FormControl>
     </ExpansionPanelDetails>
   </ExpansionPanel></div>
  );
  return (
    <div>
      {skillComponent}
    </div>
  );
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  change: PropTypes.func
};

export default withStyles(styles)(Skill);
