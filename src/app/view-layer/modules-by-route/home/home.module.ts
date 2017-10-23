import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PropertyGridModule } from '../../common-views/properties-grid/properties.grid.module';
import { PaginatorToolbarModule } from '../../common-views/paginator-toolbar/paginator.toolbar.module'
import { HomeRoutingModule } from './home.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [HomeRoutingModule,
            PropertyGridModule,
            PaginatorToolbarModule,
            FlexLayoutModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, FlexLayoutModule]
})
export class HomeModule {

}
