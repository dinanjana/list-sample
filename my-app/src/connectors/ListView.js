import { connect } from "react-redux";
import { move  } from  '../actions';
import { List } from '../components'

const mapStateToProps = state => ({ list: state.list });

const mapDispatchToProps = dispatch => ({
  move: (id, down) => dispatch(move(id, down)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);