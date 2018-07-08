/**
 * Dependencies
 */
import { Action } from '../../state-management.interfaces';
import { ActionTypes } from './auth.actions';

/**
 * The state interface
 */
export interface AuthState {
  isAuthenticated: boolean;
  userName: string;
  accessToken: string;
}

// Default app state
export const initialState: AuthState = {
  isAuthenticated: false,
  userName: undefined,
  accessToken: undefined,
};

// Reducer function
export function authReducer(state: AuthState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
        userName: state.userName,
        accessToken: state.accessToken,
      });

    case ActionTypes.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        userName: initialState.userName,
        accessToken: initialState.accessToken,
      });

    default:
      return state;
  }
}
