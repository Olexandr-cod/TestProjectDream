import axios from 'axios';
import {Dispatch} from 'redux';
import {
  CommentsDispatchTypes,
  COMMENTS_FAIL,
  COMMENTS_LOADING,
  COMMENTS_SUCCESS,
} from './CommentsActionType';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const GetComments =
  (userId: number) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    try {
      dispatch({
        type: COMMENTS_LOADING,
      });

      const res = await axios.get(`${baseUrl}posts/${userId}/comments`);

      dispatch({
        type: COMMENTS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: COMMENTS_FAIL,
      });
    }
  };
