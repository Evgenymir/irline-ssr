import { combineReducers } from 'redux';
import modalState from './modal/reducer';

const rootReducers = combineReducers({
  modal: modalState,
});

export default rootReducers;
