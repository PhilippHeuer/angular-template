/**
 * Dependencies
 */
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * State Managment
 */
import { StoreModule, ActionReducer, combineReducers, compose } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreRouterConfig, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LocalStorageService } from './services/local-storage';
import { SimpleRouterStateSerializer, RouterStateUrl } from './utils/router-state-serializer';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

// Reducers
import * as auth from './reducers/auth/auth.reducer';
import { AuthEffects } from './reducers/auth/auth.effects';
import * as setting from './reducers/setting/setting.reducer';

/**
 * We treat each reducer like a table in a database.
 * This means our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  route: RouterReducerState<any>;
  auth: auth.AuthState;
  settings: setting.SettingState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  route: routerReducer,
  auth: auth.authReducer,
  settings: setting.settingReducer,
};

// development reducer includes storeFreeze to prevent state from being mutated
const developmentReducer: any = compose(combineReducers)(reducers);

// production reducer
const productionReducer: ActionReducer<State> = combineReducers(reducers);

/**
 * The single reducer function.
 * @function reducer
 * @param {any} state
 * @param {any} action
 */
export function reducer(state: any, action: any) {
  if (environment.current === 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Core Module
 */
@NgModule({
  imports: [
    /**
     * State Management
     */
    StoreModule.forRoot(reducers,
      {
        initialState: getInitialState
      }
    ),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreRouterConnectingModule.forRoot(() => <StoreRouterConfig>{stateKey: 'route'}),
    environment.current !== 'production' ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  exports: [
  ]
})
export class StateManagementModule {
  /**
   * Constructor
   */
  constructor(
    private _logger: LoggingService
  ) {
    this._logger.log({
      level: 'DEBUG',
      message: 'State Management Module Initalized.',
      context: {
        class: this.constructor.name
      }
    });
  }

  public static forRoot() {
    return {
      ngModule: StateManagementModule,
      providers: [
        LocalStorageService,
        {
          provide: RouterStateSerializer,
          useClass: SimpleRouterStateSerializer
        }
      ],
    };
  }
}
