import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';

const [POSTS, POSTS_SUCCESS, POSTS_FAILURE] = createRequestActionTypes('post/POSTS');

export const getPosts = createAction(POSTS);

const getPostsSaga = createRequestSaga(POSTS, postAPI.getPosts);

export function* postsSaga() {
  yield takeLatest(POSTS, getPostsSaga);
}

const initialState = {
  posts: null,
  error: null
};

const posts = handleActions({
  [POSTS]        : state => ({
    ...state,
    posts: null,
    error: null,
  }),
  [POSTS_SUCCESS]: (state, {payload: posts}) => ({
    ...state,
    posts
  }),
  [POSTS_FAILURE]: (state, {payload: error}) => ({
    ...state,
    error
  })
}, initialState);

export default posts;
