import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FioreComponent } from './fiore/fiore.component';

@NgModule({
  declarations: [
    AppComponent,
    FioreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, FioreComponent]
})
export class AppModule { }
