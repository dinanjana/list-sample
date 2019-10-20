import { connect } from "react-redux";
import { revert  } from  '../actions';
import { HistoryListComp } from '../components'

const mapStateToProps = state => ({ list: state.historyList });

const mapDispatchToProps = dispatch => ({
  revert: (postId, currentIdx, prevIdx) => dispatch(revert(postId, currentIdx, prevIdx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryListComp);