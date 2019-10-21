import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { List, HistoryList } from './connectors';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function styles () {
  return {
    marginTop:'20px'
  }
}

const App = () => {
  const classes = useStyles();
    return (
      <div>
        <tr>
          <td>
            <Paper className={classes.root}><List/></Paper>
          </td>
          <td>
            <Paper className={classes.root}><HistoryList/></Paper>
          </td>
        </tr>
      </div>
    )
};
export default App;
