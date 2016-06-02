import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCraators from '../actions/actionCreators';
import Main from './Main';


function  mapStateToProps(state) {
    return {
        posts: state.posts,
        comments:state.comments
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCraators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;