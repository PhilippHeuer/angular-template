/**
 * Dependencies
 */
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { CoreModule } from '@modules/app-core';
import { SharedModule } from '@modules/app-shared';

/**
 * Components
 */
import { AppComponent } from '@app/app.component';


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
