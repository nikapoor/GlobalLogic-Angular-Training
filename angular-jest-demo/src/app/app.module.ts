import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    AsynchronousComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AsynchronousComponent]
})
export class AppModule { }
