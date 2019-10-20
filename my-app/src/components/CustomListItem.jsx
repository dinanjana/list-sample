import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

const CustomListItem = ({ idx, text, move }) => {

  return(
    <ListItem>
      <ListItemText primary={`Post ${text.id}`} secondary={text.body}/>
      {idx !== 0 ?  <ExpandLessIcon button onClick={ () => move(idx) }/> : null}
      {idx !== 4 ? <ExpandMoreIcon button onClick={ () => move(idx, false) }/> : null}
    </ListItem>
  )
};

export default CustomListItem;

