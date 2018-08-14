import React from 'react';
import PropTypes from 'prop-types';
import SkillsHeader from './components/SkillsHeader';
import ValidationErrors from './components/ValidationErrors';
import SkillsList from './components/SkillsList';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    padding: '30px 15px'
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ValidationErrors />
      <SkillsHeader />
      <SkillsList  />
    </div>

  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
