import { combineReducers } from 'redux';
const changeMe = () => {
  return true;
};

const reducers = combineReducers({
  changeMe,
});

export default reducers;
