import { NgModule } from '@angular/core';
import { PropertyGridComponent } from './property-grid.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PropertyGridComponent],
  imports: [
    MatButtonModule
  ],
  exports: [PropertyGridComponent]
})
export class PropertyGridModule { }
