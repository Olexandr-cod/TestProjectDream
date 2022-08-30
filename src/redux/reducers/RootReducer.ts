import {combineReducers} from 'redux';
import commentsReducer from './CommentsReducer';
import postsReducer from './PostsReducer';

const RootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default RootReducer;
