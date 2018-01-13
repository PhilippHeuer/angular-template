/**
 * Dependencies
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * Application Dependencies
 */
import { AppModule } from '@app/app-module';
import { environment } from '@environments/environment';

/**
 * Check environment to set production mode
 */
if (environment.current === 'production') {
  enableProdMode();
}

/**
 * Bootstrap Application
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
