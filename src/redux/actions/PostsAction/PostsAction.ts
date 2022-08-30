import axios from 'axios';
import {Dispatch} from 'redux';
import {
  PostsDispatchTypes,
  POSTS_FAIL,
  POSTS_LOADING,
  POSTS_SUCCESS,
} from './PostsActionTypes';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const GetPosts =
  () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
      dispatch({
        type: POSTS_LOADING,
      });

      const res = await axios.get(`${baseUrl}posts`);

      dispatch({
        type: POSTS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POSTS_FAIL,
      });
    }
  };
