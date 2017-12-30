/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Services
 */
import { LoggingService } from '@modules/app-core/services/logging';

/**
 * Shared Module
 */
@NgModule({
  declarations: [
  ],
  imports: [
    // Angular
    CommonModule,
    // Forms
    FormsModule,
  ],
  exports: [
    // Angular
    CommonModule,
    // Forms
    FormsModule,
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
        // Forms
        FormsModule,
      ]
    };
  }

}
