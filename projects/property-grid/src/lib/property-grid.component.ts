import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {IPGObject} from './services/property-grid.service'

/* const VALUE_ACCESSOR : Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting : forwardRef( () => PropertyGridComponent),
  multi: true
}
 */
@Component({
  selector: 'rlt-property-grid',
  templateUrl : './property-grid.component.html',
  styleUrls: ['./property-grid.component.css']
})
export class PropertyGridComponent  {

  /** @summary Список выборанных обьектов. */
  private selectedObjects : IPGObject[] = [];



  select(obj:IPGObject)
  {
    this.selectedObjects = [];
    
  }
}
