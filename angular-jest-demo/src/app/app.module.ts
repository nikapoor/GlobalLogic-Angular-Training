import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AsychronousComponent } from './asychronous/asychronous.component';

@NgModule({
  declarations: [
    AppComponent,
    AsychronousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AsychronousComponent]
})
export class AppModule { }
