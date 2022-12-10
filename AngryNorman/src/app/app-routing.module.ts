import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameScreenComponent } from './game-screen/game-screen/game-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen/home-screen.component';
import { ScoreboardScreenComponent } from './scoreboard-screen/scoreboard-screen/scoreboard-screen.component';
const routes: Routes = [
  {
    path: 'game',
    component: GameScreenComponent
  },
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'scoreboard',
    component: ScoreboardScreenComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }