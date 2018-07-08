/**
 * Dependencies
 */
import { Action } from '../../state-management.interfaces';
import { ActionTypes } from './setting.actions';

/**
 * The state interface
 */
export interface SettingState {
  theme: string;
  language: string;
}

/**
 * Initial State
 */
export const initialState: SettingState = {
  theme: 'default',
  language: 'en',
};

/**
 * The Selector
 */
export const selectorSetting = state => <SettingState>(state.settings || initialState);

/**
 * Reducer Function
 */
export function settingReducer(state: SettingState = initialState, action: Action) {
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
