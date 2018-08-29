/**
 * Dependencies
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatChipsModule } from '@angular/material';

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
    MatChipsModule,
  ],
  exports: [
    // Angular
    CommonModule,
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
    MatChipsModule,
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
