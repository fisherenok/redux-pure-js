import {CHANGE_THEME, DECREMENT, DISABLE_BUTTON, ENABLE_BUTTON, INCREMENT} from './types';
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state;
}

const initialThemeState = {
  value: 'light',
  disabled: false
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload};
    case DISABLE_BUTTON:
      return {...state, disabled: true};
    case ENABLE_BUTTON:
      return {...state, disabled: false};
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});
