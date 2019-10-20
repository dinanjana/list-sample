import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const HistoryListItem = ({ history, revert }) => {
  const classes = useStyles();
  return(
    <ListItem>
      <ListItemText primary={`Moved Post ${history.postId} from index ${history.prevIdx} to ${history.currentIdx}`}/>
      <Button variant="contained" color="primary" className={classes.button} button onClick={ () => revert(history.postId, history.currentIdx, history.prevIdx) }>
        Time travel
      </Button>
    </ListItem>
  )
};

export default HistoryListItem;

