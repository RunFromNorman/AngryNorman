import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import { Obstacle, ObstacleService, score, start } from './obstacle.service';
import { obs, platCords, platDms, grade } from './obstacle.service';
import { GameScreenComponent } from '../game-screen/game-screen/game-screen.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) {

  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
     this.db.collection('score board').valueChanges({ username: 'username'}).subscribe(users => resolve(users));
    })
  }
  
  addName(username: string|null, score: number[], grade: any) {
    return this.db.collection('score board')
      .add({username, score, grade})
  }


}
