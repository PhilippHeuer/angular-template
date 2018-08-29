/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Font Awesome
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

/**
 * Services
 */
import { LoggingService } from '@app/app-core/services/logging';

/**
 * Shared Module
 */
@NgModule({
  declarations: [
  ],
  imports: [
    // Angular
    CommonModule,
    // Font-AWesome
    FontAwesomeModule,
  ],
  exports: [
    // Angular
    CommonModule,
    // Font-AWesome
    FontAwesomeModule,
  ]
})
export class SharedModule {

  /**
   * Constructor
   */
  constructor(
    private _logger: LoggingService
  ) {
    this._logger.log({
      level: 'DEBUG',
      message: 'App Shared Module Initalized.',
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
      ngModule: SharedModule,
      providers: [
      ]
    };
  }

}
