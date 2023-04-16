import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/fourofour/fourofour.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';

import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo11Component } from './exercices/exo11/exo11.component';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo11', component: Demo11Component },
      { path: 'demo12', component: Demo12Component },
      { path: 'demo13', component: Demo13Component },
      { path: 'demo14', component: Demo14Component },
      { path: 'demo15', component: Demo15Component },
      { path: 'demo16', component: Demo16Component },
      { path: 'demo17', component: Demo17Component },
    ]
  },
  {
    path: 'exercices', children: [
      { path: '', component: ExercicesComponent },
      { path: 'exo01', component: Exo01Component },
      { path: 'exo02', component: Exo02Component },
      { path: 'exo03', component: Exo03Component },
      { path: 'exo11', component: Exo11Component },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
