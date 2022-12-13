import { Component, ElementRef, HostListener, OnInit, OnChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dimensions, PlayerService } from '../../services/player.service';
import { Obstacle, ObstacleService, score, start } from '../../services/obstacle.service';
import { obs, platCords, platDms, grade } from '../../services/obstacle.service';
import { playerCords, playerDms } from '../../services/player.service';
import { normanCords, normanDms, NormanService } from '../../services/norman.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit, OnChanges {

  username: string | null = null;
  start: boolean = false;
  obs: Obstacle[] = obs;
  playerDms: Dimensions = playerDms;
  normanDMS: Dimensions = normanDms;
  score: number[] = score;
  grade: any = grade;

  @ViewChild('player') playerRef!: ElementRef;
  @ViewChild('norman') normanRef!: ElementRef;
  @ViewChild('platform') platformRef!: ElementRef;




  constructor(private route: ActivatedRoute,
    public ps: PlayerService,
    public ns: NormanService,
    public ob: ObstacleService,
    private router: Router,
    private dataservice: DataService) {

    // retrieving the data passed from route
    this.username = this.route.snapshot.paramMap?.get('user');
    if (this.username === null || this.username === "") {
      this.router.navigate(['/']);
    }

  }


  // listening to the key down evnets
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Handles Key board functionalities of each [space],[Arrow Key Up], [Arrow Key Down], and [Enter]
    switch (event.key) {
      case ' ':
      case 'ArrowUp':
        if (this.ob.playing)
          // calling from the imported player service which contains jump() function
          this.ps.jump();
        break;

      case 'Enter':
        if (!this.ob.playing)
          this.startGame();
        this.start = true;
        break;

      case 'ArrowDown': {
        // calling from the imported player service which contains duck() function
        this.ps.duck();
      }
        break;
    }
  }


  ngOnInit(): void {
    this.grade = 'F'
    this.score[0] = 0;
    this.score[1] = 0;
    obs.splice(0, obs.length);
    playerCords.xoffset = 0;
    playerCords.yoffset = 0;
    playerDms.height = 30;
    playerDms.width = 20;
    this.ps.bottom = 0;
  }
  ngDoCheck(): void {
    if (score[0] < 150) { this.grade = 'F' }
    if (score[0] > 150 && score[0] < 300) { this.grade = 'D' }
    if (score[0] > 300 && score[0] < 350) { this.grade = 'C' }
    if (score[0] > 500 && score[0] < 650) { this.grade = 'B' }
    if (score[0] > 800 && score[0] < 1000) { this.grade = 'A' }
    if (score[0] > 1000) { this.grade = 'godmode' }
  }
  ngOnChanges(): void {

  }

  // start or restart the game on spacebar button.
  // start : clear all the obstacle and score and other stuff.
  startGame() {
    obs.splice(0, obs.length);
    this.ps.bottom = 0;
    playerDms.height = 30;
    playerCords.xoffset = 150;
    playerCords.yoffset = 328;
    this.ns.bottom = 0;
    normanDms.height = 60;
    normanCords.xoffset = 50;
    normanCords.yoffset = 600;
    // https://github.com/deeps8/ng-dino
    let plCords = this.platformRef.nativeElement.getBoundingClientRect();
    // xoffset = determine where player is horizontally
    // yoffset = determine where player is vertically
    platCords.xoffset = Math.floor(plCords.x + plCords.width);
    platCords.yoffset = Math.floor(plCords.y + plCords.height);

    platDms.width = Math.floor(plCords.width);
    platDms.height = Math.floor(plCords.height);

    /* *** UNDERSTANDING THE SOURCE CODE ***
    obstacle being created by:
       -> spawning() being called
       -> when game starts, every determined gamespeed seconds, obstacle is created and added to array
       -> This array contains objects of classes obstacle
       -> Each of these Rectangle shaped obstacles are created by this.platformRef.nativeElement.getBoundingClientRect();
       -> Which is a manipulation of DOM, it returns a DOMRECT object. (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
       -> Then at in spawning() function, Using DOM Manipulation, and timer with setInterval, objects are able to be created and moved across the Document
    */
    this.ob.spawning();
  }

  // saveScore function is called in the game-screen component, and it will save the current username, score, grade to the database.
  saveScore(username: string | null, score: number[], grade:any){
    this.dataservice.addUserToTable(this.username, this.score, this.grade)
      .then()
      .catch(err => {
        console.error(err);
        alert(err.message);
      });
    alert('Score is saved!')
  }
}
