import {
  PostsDispatchTypes,
  PostsType,
  POSTS_FAIL,
  POSTS_LOADING,
  POSTS_SUCCESS,
} from '../actions/PostsAction/PostsActionTypes';

interface DefaultStateI {
  loading: boolean;
  posts?: PostsType;
}

const initialState: DefaultStateI = {
  loading: false,
};

const postsReducer = (
  state: DefaultStateI = initialState,
  action: PostsDispatchTypes,
): DefaultStateI => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case POSTS_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
