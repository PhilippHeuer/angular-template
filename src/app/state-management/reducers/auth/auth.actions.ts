/**
 * Dependencies
 */
import { Action } from '@ngrx/store';

/**
 * Action Constants
 * @type {Actions}
 */
export enum ActionTypes {
  LOGIN              = '[Auth] LOGIN',
  LOGOUT             = '[Auth] LOGOUT',
  AUTH_SUCCESS       = '[Auth] AUTH SUCCESS',
  AUTH_TOKEN_REFRESH = '[Auth] AUTH TOKEN REFRESHED',
}

/**
 * Login
 * @class LoginAction
 * @implements {Action}
 */
export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;

  constructor() {}
}

/**
 * Logout
 * @class LogoutAction
 * @implements {Action}
 */
export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;

  constructor() {}
}

/**
 * Authentication Success
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationSuccessAction implements Action {
  readonly type = ActionTypes.AUTH_SUCCESS;

  constructor(public payload: {
    accessToken: string,
    userAccountName: string,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
  }) {}
}

/**
 * Authentication Token Refreshed
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationTokenRefreshAction implements Action {
  readonly type = ActionTypes.AUTH_TOKEN_REFRESH;

  constructor(public payload: {
    accessToken: string,
    userAccountName: string,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
  }) {}
}

/**
 * Action methods
 */
export type ActionFunctions = AuthenticationSuccessAction | AuthenticationTokenRefreshAction;
