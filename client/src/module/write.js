import {createAction, handleActions} from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({key, value}));

const initailSatate = {
  title: '',
  body : '',
  tags : []
};

const write = handleActions({
  [INITIALIZE]  : state => initailSatate,
  [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
    ...state,
    [key]: value
  })
}, initailSatate);

export default write;
