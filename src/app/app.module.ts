import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/fourofour/fourofour.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChildrenInputComponent } from './demos/demo11/children-input/children-input.component';
import { ChildrenOutputComponent } from './demos/demo11/children-output/children-output.component';
import { ChildrenNgcontentComponent } from './demos/demo11/children-ngcontent/children-ngcontent.component';
import { ListeComponent } from './exercices/exo11/liste/liste.component';

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
import { Exo04Component } from './exercices/exo04/exo04.component';
import { Exo11Component } from './exercices/exo11/exo11.component';

import { HighlightDirective } from './demos/demo10/highlight.directive';
import { PrepareRenderDirective } from './demos/demo10/prepare-render.directive';

import { CustomPipePipe } from './demos/demo07/custom-pipe.pipe';
import { CustomPipe2Pipe } from './demos/demo07/custom-pipe2.pipe';
import { CustomPipe3Pipe } from './demos/demo07/custom-pipe3.pipe';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';
import { ChildComponent } from './demos/demo13/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    NavbarComponent,
    FourofourComponent,
    Demo06Component,
    Demo07Component,
    CustomPipePipe,
    CustomPipe2Pipe,
    CustomPipe3Pipe,
    Exo01Component,
    Exo02Component,
    Exo03Component,
    Demo08Component,
    Demo09Component,
    Demo10Component,
    PrepareRenderDirective,
    HighlightDirective,
    Exo04Component,
    Demo11Component,
    ChildrenInputComponent,
    ChildrenOutputComponent,
    ChildrenNgcontentComponent,
    Exo11Component,
    ListeComponent,
    DemosComponent,
    ExercicesComponent,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    Demo16Component,
    Demo17Component,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Important pour le fonctionnement du Two-Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
