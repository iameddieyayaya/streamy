import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //reducer that comes from the redux-form - renamed it using as newname
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
