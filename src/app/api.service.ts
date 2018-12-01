import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public move(x: number , y: number  , player: number): boolean {
    console.log('player ' + player + ' trying to move');
    return true;
  }
}
