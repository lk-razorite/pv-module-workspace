import { NgModule } from '@angular/core';
import { PvModuleLibraryComponent } from './pv-module-library.component';
import { GiftCardModule } from './gift-card/gift-card.module';
import { MembershipsModule } from './memberships/memberships.module'
import { PvComponentsLibraryModule } from '@pv-frontend/pv-components-library';


@NgModule({
  declarations: [
    PvModuleLibraryComponent
  ],
  imports: [
    // GiftCardModule,
    // MembershipsModule,
    PvComponentsLibraryModule
  ],
  exports: [
    PvModuleLibraryComponent
  ]
})
export class PvModuleLibraryModule { }
