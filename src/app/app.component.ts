import { Component } from '@angular/core';
import {PropertyGridComponent} from '@rlt/property-grid'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent
{
  constructor()
  {
    
  }


  appendFirst()
  {
    console.log('appendFirst');
  }

  appendSecond()
  {
    console.log('appendSecond');
  }
}

