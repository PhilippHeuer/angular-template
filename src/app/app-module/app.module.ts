/**
 * Dependencies
 */
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { CoreModule } from '@app/app-core';
import { SharedModule } from '@app/app-shared';

/**
 * Components
 */
import { AppComponent } from './components/root';

/**
 * Module
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
