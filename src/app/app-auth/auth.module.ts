/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * Module Dependencies
 */
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
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
    private _logger: LoggingService
  ) {
    this._logger.log({
      level: 'DEBUG',
      message: 'Authentication Module Initalized.',
      context: { class: this.constructor.name }
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

}
