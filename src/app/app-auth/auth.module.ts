/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * State Management
 */
import * as fromAuthActions from '@app/state-management/reducers/auth/auth.actions';

/**
 * Module Dependencies
 */
import { KeycloakAngularModule, KeycloakService, KeycloakEventType, KeycloakEvent } from 'keycloak-angular';
import { initializer } from './utils/keycloak.init';
import { AppAuthGuard } from './guards/keycloak.authguard';

/**
 * Application wide providers
 */
export const AUTH_PROVIDERS = [
  KeycloakService,
  {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  },
  AppAuthGuard,
];

/**
 * Authentication Module
 */
@NgModule({
  declarations: [
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    // Keycloak
    KeycloakAngularModule,
  ],
  exports: [
    // Angular
    CommonModule,
  ]
})
export class AuthModule {

  /**
   * Constructor
   */
  constructor(
    private logger: LoggingService,
    private store: Store<any>,
    private keycloakService: KeycloakService,
  ) {
    // logging
    this.logger.log({
      level: 'DEBUG',
      message: 'Authentication Module Initalized.',
      context: { class: this.constructor.name }
    });

    // listen for keycloak events
    this.keycloakService.keycloakEvents$.subscribe(event => {
      this.keycloakEventTriggered(event);
    });
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AUTH_PROVIDERS
      ]
    };
  }

  private keycloakEventTriggered(event: KeycloakEvent): void {
    switch (event.type) {
      case KeycloakEventType.OnAuthSuccess:
        // authentication success
        this.keycloakService.getToken().then(
          (token) => {
            this.keycloakService.loadUserProfile().then(
              (profile) => {
                this.store.dispatch(
                  new fromAuthActions.AuthenticationSuccessAction({
                    accessToken: token,
                    userAccountName: profile.username,
                    userFirstName: profile.firstName,
                    userLastName: profile.lastName,
                    userEmail: profile.email,
                  })
                );
              }
            );
          }
        );
        break;
      case KeycloakEventType.OnTokenExpired:
        // try to updae token if it expires
        this.keycloakService.updateToken().then(
          (result) => {
            // token updated successfully
            if (result) {
              this.keycloakService.getToken().then(
                (token) => {
                  this.keycloakService.loadUserProfile().then(
                    (profile) => {
                      this.store.dispatch(
                        new fromAuthActions.AuthenticationSuccessAction({
                          accessToken: token,
                          userAccountName: profile.username,
                          userFirstName: profile.firstName,
                          userLastName: profile.lastName,
                          userEmail: profile.email,
                        })
                      );
                    }
                  );
                }
              );
            }
          }
        );
        break;
      default:
        break;
    }
  }

}
