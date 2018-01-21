/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, PreloadAllModules, Route } from '@angular/router';

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * Routing: Modules
 */

/**
 * Routing: Components
 */
import { HomeComponent } from '@app/app-module/components/home';
import { NoContentComponent } from '@app/app-module/components/no-content';

/**
 * Routes
 */
export const ModuleRoutes: Route[] = [
  /**
   * Routes: Content & Features
   */
  {
    path: '',
    component: HomeComponent,
  },
  /**
   * Routes: Errors
   */
  {
    path: '404',
    component: NoContentComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

/**
 * Shared Module
 */
@NgModule({
  declarations: [
  ],
  imports: [
    // Router
    RouterModule.forRoot(ModuleRoutes, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {

  /**
   * Constructor
   */
  constructor(
    private _logger: LoggingService
  ) {
    this._logger.log({
      level: 'DEBUG',
      message: 'App Routing Module Initalized.',
      context: {
        class: this.constructor.name
      }
    });
  }

  /**
   * Gets the module with providers
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppRoutingModule,
      providers: [
      ]
    };
  }

}
