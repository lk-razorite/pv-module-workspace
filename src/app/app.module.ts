import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PvModuleLibraryModule} from 'pv-module-library';
import * as clientConfig from '../../clientConfig.json';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PvModuleLibraryModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    public static forRoot(environment: any): ModuleWithProviders<any> {

    return {
        ngModule: AppModule,
        providers: [
            {
                provide: 'config', // you can also use InjectionToken
                useValue: clientConfig.home.gc.card
            },
        ]
    };
  }
 }
