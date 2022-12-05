import { Injectable } from '@angular/core';
import { obs, start } from './obstacle.service';

// interfaces for coordinates and dimensions

export interface Cords{
  xoffset:number,
  yoffset:number
}

export interface Dimensions{
  height:number,
  width:number
}

export let normanCords:Cords = {xoffset:0,yoffset:0};
export let normanDms: Dimensions = {height:60,width:40};


@Injectable({
  providedIn: 'root'
})

export class NormanService {

  bottom:number = 30;
  timer:{
    jump:number,
    duck:number
  } = { jump:20, duck:20 };

  constructor() {

  }



}
