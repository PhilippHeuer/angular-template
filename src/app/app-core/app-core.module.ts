/**
 * Dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * Material - Navigation
 */
import { MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

/**
 * Material - Layout
 */
import { MatStepperModule, MatTabsModule, MatListModule, MatCardModule, MatTreeModule } from '@angular/material';

/**
 * Material - Inputs
 */
import { MatInputModule, MatButtonModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

/**
 * Material - Buttons & Indicators
 */
import { MatIconModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

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
    // Material
    // - Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    // - Layout
    MatTabsModule,
    MatStepperModule,
    MatListModule,
    MatCardModule,
    MatTreeModule,
    // - Input
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    // - Buttons & Indicators
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    // Material
    // - Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    // - Layout
    MatTabsModule,
    MatStepperModule,
    MatListModule,
    MatCardModule,
    MatTreeModule,
    // - Input
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    // - Buttons & Indicators
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
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
        LoggingService,
      ],
    };
  }
}
