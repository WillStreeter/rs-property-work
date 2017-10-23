import { ModuleWithProviders,  NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HttpWrapperService } from '../api-services/http.wrapper.service';
import { PropertiesService } from '../api-services/properties.service';

/*
     ngrx base library
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from  './reducers/index';


/*
     effects
 */


import { ErrorEffects } from './effects/error.effects';
import { PropertiesEffects } from './effects/properties.effects';
import { PortalEffects } from './effects/portal.effects';


/*
   Routes and Guards
 */

@NgModule({
    imports: [ CommonModule,
               HttpClientModule,
               StoreModule.forRoot(reducers, { metaReducers }),
               EffectsModule.forRoot([]),
               EffectsModule.forFeature([ErrorEffects,
                                      PropertiesEffects,
                                      PortalEffects]) ],
    exports: [],
    providers: [
                 HttpWrapperService,
                 PropertiesService  ]
})
export class NGRxDataModule {

  constructor(@Optional() @SkipSelf() parentModule: NGRxDataModule) {
    if (parentModule) {
      throw new Error('NGRxDataModule already loaded; Import in root module only.');
    }
  }
  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: NGRxDataModule,
      providers: [ HttpWrapperService,
                   PropertiesService]
    }
  }
}