import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PropertyGridModule } from '../../common-views/properties-grid/properties.grid.module';
import { HomeRoutingModule } from './home.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [HomeRoutingModule,
            PropertyGridModule,
            FlexLayoutModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, FlexLayoutModule]
})
export class HomeModule {

}
