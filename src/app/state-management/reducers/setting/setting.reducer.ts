/**
 * Dependencies
 */
import { Action } from '../../state-management.interfaces';
import { ActionTypes } from './setting.actions';

/**
 * The state interface
 */
export interface State {
  theme: string;
  language: string;
}

// Default app state
export const initialState: State = {
  theme: 'DEFAULT-THEME',
  language: 'en',
};

// Reducer function
export function settingReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return Object.assign({}, state, {
        theme: action.payload
      });

    case ActionTypes.CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload
      });

    default:
      return state;
  }
}
