import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import HistoryListItem from './HistoryListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const HistoryListComp = (props) => {
  const { list, revert } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List of actions committed
          </ListSubheader>
        }
        className={classes.root}>
        {
          list.reverse().map((ele) => (
            <HistoryListItem
              revert={revert}
              history={ele}
            />))
        }
      </List>
    </div>
  );
};

export default HistoryListComp;