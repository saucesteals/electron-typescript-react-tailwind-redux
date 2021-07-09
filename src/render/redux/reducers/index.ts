import { combineReducers } from 'redux';

function count(state: any, action: any) {
  if (typeof state === 'undefined') {
    state = 0; // If state is undefined, initialize it with a default value
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state; // In case an action is passed in we don't understand
  }
}

const reducers = combineReducers({
  count,
});

export default reducers;
