export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';

export type CommentsType = {
  comments: CommentsInfo[];
};

export type CommentsInfo = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface CommentsLoading {
  type: typeof COMMENTS_LOADING;
}

export interface CommentsFail {
  type: typeof COMMENTS_FAIL;
}

export interface CommentsSuccess {
  type: typeof COMMENTS_SUCCESS;
  payload: CommentsType;
}

export type CommentsDispatchTypes =
  | CommentsLoading
  | CommentsFail
  | CommentsSuccess;
