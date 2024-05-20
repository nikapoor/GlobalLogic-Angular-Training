import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(),

NgxsLoggerPluginModule.forRoot(),

NgxsReduxDevtoolsPluginModule.forRoot(),

NgxsStoragePluginModule.forRoot(),

NgxsRouterPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
