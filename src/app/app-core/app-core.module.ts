/**
 * Dependencies
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * Services
 */
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
    private _logger: LoggingService,
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }

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
        LoggingService,
      ],
    };
  }
}
