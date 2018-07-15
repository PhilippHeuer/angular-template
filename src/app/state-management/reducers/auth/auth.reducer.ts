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
  accessToken?: string;
  userAccountName?: string;
  userFirstName?: string;
  userLastName?: string;
  userEmail?: string;
}

// Default app state
export const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: undefined,
  userAccountName: undefined,
  userFirstName: undefined,
  userLastName: undefined,
  userEmail: undefined,
};

// Reducer function
export function authReducer(state: AuthState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: false,
        accessToken: initialState.accessToken,
        userAccountName: initialState.userAccountName,
        userFirstName: initialState.userFirstName,
        userLastName: initialState.userLastName,
        userEmail: initialState.userEmail,
      });

    case ActionTypes.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        accessToken: initialState.accessToken,
        userAccountName: initialState.userAccountName,
        userFirstName: initialState.userFirstName,
        userLastName: initialState.userLastName,
        userEmail: initialState.userEmail,
      });

    case ActionTypes.AUTH_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        userAccountName: action.payload.userAccountName,
        userFirstName: action.payload.userFirstName,
        userLastName: action.payload.userLastName,
        userEmail: action.payload.userEmail,
      });

    case ActionTypes.AUTH_TOKEN_REFRESH:
      return Object.assign({}, state, {
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        userAccountName: action.payload.userAccountName,
        userFirstName: action.payload.userFirstName,
        userLastName: action.payload.userLastName,
        userEmail: action.payload.userEmail,
      });

    default:
      return state;
  }
}
