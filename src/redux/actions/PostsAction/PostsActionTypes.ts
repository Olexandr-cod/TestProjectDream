export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_FAIL = 'POSTS_FAIL';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';

export type PostsType = {
  posts: PostInfo[];
};

export type PostInfo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface PostsLoading {
  type: typeof POSTS_LOADING;
}

export interface PostsFail {
  type: typeof POSTS_FAIL;
}

export interface PostsSuccess {
  type: typeof POSTS_SUCCESS;
  payload: PostsType;
}

export type PostsDispatchTypes = PostsLoading | PostsFail | PostsSuccess;
