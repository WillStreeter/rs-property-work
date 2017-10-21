import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundPageRoutingModule } from './notfound.page.routing.module';
import { NotfoundPageComponent } from './notfound.page.component';


@NgModule({
    imports: [ NotfoundPageRoutingModule,
               RouterModule],
    declarations: [NotfoundPageComponent],
    exports: [NotfoundPageComponent]
})

export class NotfoundPageModule { }
