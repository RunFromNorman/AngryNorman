import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { GameScreenComponent } from './game-screen/game-screen/game-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen/home-screen.component';
import { ScoreboardScreenComponent } from './scoreboard-screen/scoreboard-screen/scoreboard-screen.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    HomeScreenComponent,
    ScoreboardScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }