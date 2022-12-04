import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dimensions, PlayerService } from '../../services/player.service';
import { Obstacle, ObstacleService, score, start } from '../../services/obstacle.service';
import { obs,platCords,platDms } from '../../services/obstacle.service';
import { playerCords,playerDms } from '../../services/player.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit{

  username:string | null = null;
  start:boolean = false;
  obs:Obstacle[]=obs;
  playerDms:Dimensions = playerDms;
  score:number[] = score;

  @ViewChild('player') playerRef!: ElementRef;
  @ViewChild('platform') platformRef!: ElementRef;


  constructor(private route:ActivatedRoute,
              public ps:PlayerService,
              public ob:ObstacleService,
              private router:Router) {

    // retrieving the data passed from route
    this.username = this.route.snapshot.paramMap?.get('user');
    if(this.username === null || this.username==""){
      this.router.navigate(['/']);
    }

  }


  // listening to the key down evnets
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    switch (event.key) {
      case ' ':
      case 'ArrowUp':
            if(this.ob.playing)
              this.ps.jump();
            break;

      case 'Enter':
            if(!this.ob.playing)
              this.startGame();
            break;

      case 'ArrowDown':{
              this.ps.duck();
            }
            break;
    }
  }


  ngOnInit(): void {
  }

  // start or restart the game on spacebar button.
  // start : clear all the obstacle and score and other stuff.
  startGame(){

    obs.splice(0,obs.length);
    this.ps.bottom = 0;
    playerDms.height = 30;
    playerCords.xoffset = 50;
    playerCords.yoffset = 328;


    let plCords = this.platformRef.nativeElement.getBoundingClientRect();
    platCords.xoffset = Math.floor(plCords.x + plCords.width);
    platCords.yoffset = Math.floor(plCords.y + plCords.height);

    platDms.width = Math.floor(plCords.width);
    platDms.height = Math.floor(plCords.height);

    this.ob.spawning();
  }


}
