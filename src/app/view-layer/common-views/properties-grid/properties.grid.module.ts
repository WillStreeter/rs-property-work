
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from '../custom-validators/control.messaging.component';
import { ValidationService } from '../../../business-layer/validators/services/validation.service';
import { DataStructureServices } from '../../../business-layer/helpers/data.structures.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PropertiesGridComponent } from './properties.grid.component';
import { GridRowComponent } from '../grid-row/grid.row.component';
import { GridToolbarComponent } from '../grid-toolbar/grid.toolbar.component';
import { MaterialModule } from '../../material.module';


@NgModule({
    imports: [  FormsModule,
        ReactiveFormsModule,
               CommonModule,
               MaterialModule,
               FlexLayoutModule ],
    providers: [ ValidationService ,
                  DataStructureServices,
                  CurrencyPipe],
    declarations: [ PropertiesGridComponent,
                    ControlMessagesComponent,
                    GridToolbarComponent,
                    GridRowComponent ],
    exports: [PropertiesGridComponent,
              ControlMessagesComponent,
              GridToolbarComponent,
              GridRowComponent]
})

export class PropertyGridModule { }
