import produce from 'immer';
import {createAction, handleActions} from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeFiled = createAction(CHANGE_FIELD, ({form, key, value}) => ({form, key, value}));
export const initalizeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
  register: {
    username       : '',
    password       : '',
    passwordConfirm: '',
  },
  login   : {
    username: '',
    password: '',
  }
};

const auth = handleActions(
  {
    [CHANGE_FIELD]   : (state, {payload: {from, key, value}}) => produce(state, draft => {
      draft[from][key] = value;
    }),
    [INITIALIZE_FORM]: (state, {
      payload: form
    }) => ({
      ...state,
      [form]: initialState[form]
    })
  },
  initialState
);

export default auth;

