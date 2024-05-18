import { NgModule } from "@angular/core";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";
import { CounterState } from "./counter.state";


@NgModule({
    imports: [
        NgxsModule.forRoot([CounterState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsFormPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsStoragePluginModule.forRoot()
    ]
})

export class CounterModule { }