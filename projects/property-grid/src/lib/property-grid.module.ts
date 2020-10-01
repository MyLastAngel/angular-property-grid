import { NgModule } from '@angular/core';
import { PropertyGridComponent } from './property-grid.component';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PropertyGridComponent],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [PropertyGridComponent]
})
export class PropertyGridModule { }
