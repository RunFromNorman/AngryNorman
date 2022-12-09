import { Injectable } from '@angular/core';
import { obs, start } from './obstacle.service';

// interfaces for coordinates and dimensions
/*
code built on https://github.com/deeps8/ng-dino
*/
export interface Cords {
  xoffset: number,
  yoffset: number
}

export interface Dimensions {
  height: number,
  width: number
}

export let playerCords: Cords = { xoffset: 0, yoffset: 0 };
export let playerDms: Dimensions = { height: 30, width: 20 };


@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  bottom: number = 0;
  timer: {
    jump: number,
    duck: number
  } = { jump: 20, duck: 20 };

  motion: {
    jump: boolean,
    duck: boolean
  } = { jump: false, duck: false }

  constructor() {

  }

  /*
    implement player's jump function
   */
  jump() {
    if (this.motion.jump) return;

    let upTime = setInterval(() => {

      if (this.bottom > 70 || !start) {
        // clearing interval when reaches a certain height
        clearInterval(upTime);

        // setting an interval that move downs the player
        let downTime = setInterval(() => {

          if (this.bottom <= 5 || !start) {
            clearInterval(downTime);
            this.motion.jump = false;
          }

          // decrease in bottom prop
          this.bottom -= 5;
          playerCords.yoffset += 5;
        }, this.timer.jump);
      }

      this.motion.jump = true;
      // increasing bottom prop
      this.bottom += 10;
      playerCords.yoffset -= 10;
    }, this.timer.jump);
  }


  /*
    implement player's duck function
   */
  duck() {

    if (this.motion.duck) return;

    let downTime = setInterval(() => {

      if (playerDms.height === 4 || !start) {
        clearInterval(downTime);

        let upTime = setInterval(() => {
          if (playerDms.height === 28 || !start) {
            clearInterval(upTime);
            this.motion.duck = false;
          }
          playerDms.height += 2;
          playerCords.yoffset -= 2;
        }, this.timer.duck);

      }

      this.motion.duck = true;
      playerDms.height -= 2;
      playerCords.yoffset += 2;
    }, this.timer.duck);

  }

}
