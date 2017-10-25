import { ModuleWithProviders,  NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { PropertiesService } from '../api-services/properties.service';
import { HttpWrapperService } from '../api-services/http.wrapper.service';
import { PropertyInMemDataService } from '../api-services/mock/property.in.mem.data.service';
import { InMemoryWebApiModule  } from 'angular-in-memory-web-api';

/*
     ngrx base library
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers/index';


/*
     effects
 */


import { ErrorEffects } from './effects/error.effects';
import { PropertiesEffects } from './effects/properties.effects';


/*
   Routes and Guards
 */

@NgModule({
    imports: [ CommonModule,
               HttpClientModule,
               StoreModule.forRoot(reducers, { metaReducers }),
               InMemoryWebApiModule.forRoot(PropertyInMemDataService),
               EffectsModule.forRoot([]),
               EffectsModule.forFeature([ErrorEffects,
                                                      PropertiesEffects]) ],
    exports: [],
    providers: [
                 HttpWrapperService,
                 PropertiesService  ]
})
export class MockNGRxDataModule {

  constructor(@Optional() @SkipSelf() parentModule: MockNGRxDataModule) {
    if (parentModule) {
      throw new Error('MockNGRxDataModule already loaded; Import in root module only.');
    }
  }

  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: MockNGRxDataModule,
      providers: [ HttpWrapperService,
                   PropertiesService]
    };
  }
}
