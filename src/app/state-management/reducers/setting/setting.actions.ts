/**
 * Dependencies
 */
import { Action } from '@ngrx/store';

/**
 * Action Constants
 * @type {Actions}
 */
export enum ActionTypes {
  CHANGE_THEME          = '[Settings] CHANGE_THEME',
  CHANGE_LANGUAGE       = '[Settings] CHANGE_LANGUAGE'
}

/**
 * Change Theme
 * @class ChangeThemeAction
 * @implements {Action}
 */
export class ChangeThemeAction implements Action {
  readonly type = ActionTypes.CHANGE_THEME;

  constructor(public payload: string) {}
}

/**
 * Change Language
 * @class ChangeLanguageAction
 * @implements {Action}
 */
export class ChangeLanguageAction implements Action {
  readonly type = ActionTypes.CHANGE_LANGUAGE;

  constructor(public payload: string) {}
}

/**
 * Action methods
 */
export type ActionFunctions = ChangeThemeAction | ChangeLanguageAction;
