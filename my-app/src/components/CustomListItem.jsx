import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

const CustomListItem = (idx, text, move) => {
  return(
    <ListItem>
      <ListItemText primary={`${text}`} />
      <ExpandLessIcon button onClick={ () => move(idx) }/>
      <ExpandMoreIcon button onClick={ () => move(idx, false) }/>
    </ListItem>
  )
};

export default CustomListItem;

