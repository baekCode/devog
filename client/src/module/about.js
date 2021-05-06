import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as aboutAPI from '../lib/api/about';

const SET_ORIGINAL_ABOUT = 'about/SET_ORIGINAL_ABOUT';
const INITIALIZE = 'about/INITIALIZE';
const CHANGE_FIELD = 'about/CHANGE_FIELD';
const UNLOAD_ABOUT = 'about/UNLOAD_ABOUT';
const [READ_ABOUT, READ_ABOUT_SUCCESS, READ_ABOUT_FAILURE] = createRequestActionTypes('about/READ_ABOUT');
const [WRITE_ABOUT, WRITE_ABOUT_SUCCESS, WRITE_ABOUT_FAILURE] = createRequestActionTypes('about/WRITE_ABOUT');
const [UPDATE_ABOUT, UPDATE_ABOUT_SUCCESS, UPDATE_ABOUT_FAILURE] = createRequestActionTypes('about/UPDATE_ABOUT');

export const setOriginalAbout = createAction(SET_ORIGINAL_ABOUT, about => about);
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({key, value}));
export const writeAbout = createAction(WRITE_ABOUT, ({title, body}) => ({title, body}));
export const updateAbout = createAction(UPDATE_ABOUT, ({id, title, body}) => ({id, title, body}));
export const readAbout = createAction(READ_ABOUT);
export const unloadAbout = createAction(UNLOAD_ABOUT);

const writeAboutSaga = createRequestSaga(WRITE_ABOUT, aboutAPI.writeAbout);
const updateAboutSaga = createRequestSaga(UPDATE_ABOUT, aboutAPI.updateAbout);
const readAboutSaga = createRequestSaga(READ_ABOUT, aboutAPI.getAbout);

export function* aboutSaga() {
  yield takeLatest(WRITE_ABOUT, writeAboutSaga);
  yield takeLatest(UPDATE_ABOUT, updateAboutSaga);
  yield takeLatest(READ_ABOUT, readAboutSaga);
}

const initialState = {
  title          : '',
  body           : '',
  about          : null,
  error          : null,
  originalAboutId: null
};

const about = handleActions({
  [UNLOAD_ABOUT]        : state => ({
    ...state,
    title: '',
    body : '',
    about: null,
    error: null,
  }),
  [INITIALIZE]          : state => initialState,
  [SET_ORIGINAL_ABOUT]  : (state, {payload: about}) => ({
    ...state,
    title          : about.title,
    body           : about.body,
    originalAboutId: about._id
  }),
  [CHANGE_FIELD]        : (state, {payload: {key, value}}) => ({
    ...state,
    [key]: value
  }),
  [WRITE_ABOUT]         : state => ({
    ...state,
    about: null,
    error: null,
  }),
  [WRITE_ABOUT_SUCCESS] : (state, {payload: about}) => ({
    ...state,
    about
  }),
  [WRITE_ABOUT_FAILURE] : (state, {payload: error}) => ({
    ...state,
    error
  }),
  [UPDATE_ABOUT_SUCCESS]: (state, {payload: about}) => ({
    ...state,
    about
  }),
  [UPDATE_ABOUT_FAILURE]: (state, {payload: error}) => ({
    ...state,
    error
  }),
  [READ_ABOUT_SUCCESS]  : (state, {payload: about}) => ({
    ...state,
    title: about.title,
    body : about.body,
    about
  }),
  [READ_ABOUT_FAILURE]  : (state, {payload: error}) => ({
    ...state,
    error
  }),
}, initialState);

export default about;