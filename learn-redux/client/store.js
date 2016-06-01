import {createStore, compose} from 'redux';
import {sincHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducers
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

//create an object for default data

const defaultState = {
    posts,
    comments
};

 const store = createStore(rootReducer, defaultState);
 export const history = sincHistoryWithStore(browserHistory, store);

export default store;