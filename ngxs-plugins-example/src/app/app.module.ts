import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NGXS Modules
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { LOCAL_STORAGE_ENGINE, NgxsStoragePluginModule, SESSION_STORAGE_ENGINE, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { OneState } from './store/one.state';
import { TwoState } from './store/two.state';
import { MyCustomStorageEngine } from './shared/MyCustomStorageEngine';
import { UserComponent } from './user/user.component';
import { UserState } from './store/user.state';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
    NgxsModule.forRoot([UserState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      // key: 'two'
      // key: TwoState,
      // key: ['one', 'two']
      // key: [OneState, TwoState],
      // key: ['one', TwoState]    
      // key: [
      //   {
      //     key: 'one',
      //     engine: LOCAL_STORAGE_ENGINE 
      //   },
      //   {
      //     key: 'two',
      //     engine: SESSION_STORAGE_ENGINE
      //   }
      // ]  
      // key: [
      //   {
      //     key: 'one',
      //     engine: MyCustomStorageEngine
      //   }
      // ]
    })
  ],
  providers: [MyCustomStorageEngine],
  bootstrap: [UserComponent]
})
export class AppModule { }
