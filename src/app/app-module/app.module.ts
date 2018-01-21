/**
 * Dependencies
 */
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { CoreModule } from '@app/app-core';
import { SharedModule } from '@app/app-shared';
import { AppRoutingModule } from '@app/app-routing';

/**
 * Components
 */
import { AppComponent } from './components/root';
import { HomeComponent } from '@app/app-module/components/home';
import { NoContentComponent } from '@app/app-module/components/no-content';

/**
 * Module
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
  ],
  imports: [
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule.forRoot(),
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
