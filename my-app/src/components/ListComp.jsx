import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import CustomListItem from './CustomListItem';

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

const ListComp = (props) => {
  const { list, move } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Sortable Post List
          </ListSubheader>
        }
        className={classes.root}>
        {
          list.map((ele, i) => (
            <CustomListItem
              move={move}
              text={ele}
              idx={i}
            />))
        }
      </List>
    </div>
  );
};

export default ListComp;