import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';


export interface ScoreRec {
  score: number,
  username: string;
  grade: any;
}
@Component({
  selector: 'app-scoreboard-screen',
  templateUrl: './scoreboard-screen.component.html',
  styleUrls: ['./scoreboard-screen.component.scss']
})


export class ScoreboardScreenComponent implements OnInit {
  public records: ScoreRec[] = [];
  headers = ["User Name", "Grade", "Score"];
  constructor(private db: AngularFirestore) { 
      // Bring data in descending order by score
      this.db
        .collection<ScoreRec>("score board", ref => ref.orderBy("score", "desc"))
        .valueChanges()
        .subscribe(res => {
          if (res) {
            console.log(res);
            this.records = res;
            console.log(typeof(this.records));
          }
        })
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
