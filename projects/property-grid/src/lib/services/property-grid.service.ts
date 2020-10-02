import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/** @sumary Сервис по работе с PropertyGrid обьектом */
export class PropertyGridService 
{
  select( obj : IPGObject)
  {

  }
}


/** @summary  */
export interface IPGObject
{
  getProperties();
}

/* export class PropertyGrid */