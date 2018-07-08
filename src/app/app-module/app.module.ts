/**
 * Dependencies
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Modules
 */
import { CoreModule } from '@app/app-core';
import { SharedModule } from '@app/app-shared';
import { AppRoutingModule } from '@app/app-routing';
import { StateManagementModule } from '@app/state-management';
import { AuthModule } from '@app/app-auth';

/**
 * Components
 */
import { AppComponent } from './components/app-component';
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
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule.forRoot(),
    StateManagementModule.forRoot(),
    AuthModule.forRoot(),
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
