// Permet d'utiliser le décorateur @NgModule
import { NgModule } from '@angular/core';

// Permet d'utiliser toute l'infrastructure d'Angular
import { BrowserModule } from '@angular/platform-browser';

// Permet d'importer l'inferface du routage
import { AppRoutingModule } from './app-routing.module';

// Permet d'importer le composant pour le déclarer dans les déclarations du module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Décorateur
// Point d'entrée du module
// Structure la classe en étant un Module
@NgModule({

  // Les composants utilisés par le module
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    NotFoundComponent
  ],

  // Modules importés et utilisés dans l'application
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    ReactiveFormsModule
  ],

  // Injection de dépendances
  providers: [],

  // Composant d'amorçage
  bootstrap: [AppComponent]
})
export class AppModule { }
