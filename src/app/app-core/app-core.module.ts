/**
 * Dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * Services
 */
import { AnimationsService } from '@app/app-core/services/animations';
import { LoggingService } from '@app/app-core/services/logging';

/**
 * Core Module
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ]
})
export class CoreModule {

  /**
   * Constructor
   */
  constructor(
    private _logger: LoggingService
  ) {
    this._logger.log({
      level: 'DEBUG',
      message: 'App Core Module Initalized.',
      context: {
        class: this.constructor.name
      }
    });
  }

  /**
   * Gets the module with providers
   */
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        /**
         * Modules
         */
        FormsModule,
        /**
         * Services
         */
        AnimationsService,
        LoggingService,
      ],
    };
  }
}
