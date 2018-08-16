import React from 'react';
import PropTypes from 'prop-types';
import SkillsHeader from './components/SkillsHeader';
import ValidationErrors from './components/ValidationErrors';
import SkillsChosen from './components/SkillsChosen';
import Skill from './components/Skill';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


const styles = {
  root: {
    padding: '30px 15px'
  },
  card: {
    minWidth: 275,
    marginBottom: 15
  },
  cardContent:{
    padding:0
  },
  noselectText: {
    fontWeight: 500
  },
  button: {
    backgroundColor: '#FFB100',
    textTransform: 'none',
    padding: '10px 25px',
    margin: '0 24px 24px'
  },
  grid: {
    margin: '0 auto'
  },
  lead: {
    padding: '16px 24px'
  },
  divider: {
    margin: '30px 0'
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      selection: [],
      submitted: false,
      data: [
                {
                  "id": 1,
                  "category": "Accounting and finance skills",
                  "skills": ['Accounting',
                            'Analytics',
                            'Annual accounts',
                            'Auditing of accounts',
                            'Bookkeeping',
                            'Budgeting,financial planning',
                            'Cash management',
                            'Compliance',
                            'Corporate finance',
                            'Corporate tax',
                            'Cost tracking',
                            'Credit auditing'
                          ]
                },
                {
                  "id": 2,
                  "category": "Computing and software development (IT) skills",
                  "skills": ['Agile and Lean methodologies',
                              'Algorithms',
                              'Computer, laptop maintenance and repair',
                              'Cryptography',
                              'Database servers',
                              'File management and data backups',
                              'Information Security',
                              'iOS development',
                              'JavaScript',
                              'Linux',
                              'Non-relational databases',
                              'Object-oriented databases',
                              'Operating systems',
                              'Server hosting and management',
                              'Software architecture',
                              'System and network security',
                              'Testing and debugging',
                              'Unit testing',
                              'User experience design',
                              'Virtualization',
                              'Web Analytics'
                          ]
                },
                {
                  "id": 3,
                  "category": "Telecommunications and networks skills",
                  "skills": ['Cryptography',
                              'Disaster management',
                              'Firewalls',
                              'IP protocol',
                              'Mobile data',
                              'Network design',
                              'Network optimization',
                              'Power and energy solutions',
                              'Server management',
                              'System and network security',
                              'Technical documentation',
                              'Telecom industry standards',
                              'VoIP'
                          ]
                }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {

    //console.log(event.target.value);

    // current array of options
    const options = this.state.selection;
    let index;


    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(event.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(event.target.value)
      options.splice(index, 1)
    }


    if (options.length < 5) {
      // array empty or does not exist
      this.setState({ error: true });
      return false;
    }else{
      this.setState({ error: false });
    }

    // update the state with the new array of options
    this.setState({ selection: options });

  }

  handleSubmit(event) {
    event.preventDefault();

    //alert('Testing submission');
    const options = this.state.selection;

    if (options.length < 5) {
      // array empty or does not exist
      this.setState({ error: true });
      return false;
    }else{
      this.setState({ error: false });
    }

    this.setState({ submitted : true });


  }


  render(){
    const { classes } = this.props;
    //console.log(this.state.data);
    return (

      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          { this.state.error ? <ValidationErrors /> : null }

          { this.state.submitted ? null :

            <div>
              <SkillsHeader/>
              <Grid item md={4} className={classes.grid}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent} >
                    <p className="lead" style={{padding: '16px 24px 0'}}><span className={classes.noselectText}> {this.state.selection < 1 ? 'No skilss selected' : this.state.selection.length+' skills selected'} </span></p>
                      <Skill   data={this.state.data} change={this.handleChange} />
                      <Divider className={classes.divider} />
                      <Button variant="extendedFab"  className={classes.button} type="submit">
                        Save and Continue
                      </Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          }

          { this.state.submitted ? <SkillsChosen {...this.props} options={this.state.selection}  /> : null }

        </form>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
