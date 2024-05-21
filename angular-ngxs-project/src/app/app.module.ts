import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  } from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth/auth.state';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { EmployeeState } from './state/employee/emp.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    NgxsModule.forRoot([
    AuthState,
    EmployeeState,
    ]),
    HttpClientModule,
    NgxsStoragePluginModule.forRoot({
      key: [
        'auth.authenticated',
        'auth.user'
      ]
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AuthModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
