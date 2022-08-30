import {
  CommentsDispatchTypes,
  CommentsType,
  COMMENTS_FAIL,
  COMMENTS_LOADING,
  COMMENTS_SUCCESS,
} from '../actions/CommentsAction/CommentsActionType';

interface DefaultStateI {
  loading: boolean;
  comments?: CommentsType;
}

const initialState: DefaultStateI = {
  loading: false,
};

const commentsReducer = (
  state: DefaultStateI = initialState,
  action: CommentsDispatchTypes,
): DefaultStateI => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        loading: true,
      };
    case COMMENTS_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      };
    case COMMENTS_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default commentsReducer;
