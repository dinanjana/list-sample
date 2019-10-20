import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import CustomListItem from './CustomListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

//const classes = useStyles();

const ListComp = (props) => {
  const { list, move } = props;
  console.log(`List comp ${JSON.stringify(props)}`)
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Sortable Post List
        </ListSubheader>
      }
      /*className={classes.root}*/>
      {
        list.map((ele, i) => (
          <CustomListItem
            move={move}
            text={ele.body}
            idx={i}
          />))
      }
    </List>
  );
};

export default ListComp;