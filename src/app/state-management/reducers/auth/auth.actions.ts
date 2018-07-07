/**
 * Dependencies
 */
import { Action } from '@ngrx/store';

/**
 * Action Constants
 * @type {Actions}
 */
export enum ActionTypes {
  LOGIN         = '[Auth] LOGIN',
  LOGOUT        = '[Auth] LOGOUT'
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
 * Action methods
 */
export type ActionFunctions = LoginAction | LogoutAction;
