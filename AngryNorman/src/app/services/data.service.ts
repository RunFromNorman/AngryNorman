// Source: https://www.makeuseof.com/store-update-retrieve-data-from-firebase-database-in-angular/

import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) {

  }
  
  // source: https://www.makeuseof.com/store-update-retrieve-data-from-firebase-database-in-angular/
  // addUserToTable function add new username, score, and grade to the database.
  addUserToTable(username: string|null, score: number[], grade: any) {
    return this.db.collection('score board')
      .add({username, score, grade})
  }
}
