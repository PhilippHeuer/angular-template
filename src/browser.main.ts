/**
 * Dependencies
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import app main module & environment configuration
import { AppModule } from '@app/app-module';
import { environment } from '@environments/environment';

// is prod environment?
if (environment.current === 'production') {
  enableProdMode();
}

/**
 * Bootstrap Application
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
