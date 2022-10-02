// Permet d'importer le décorateur Componant (interface héritance de Directive)
import { Component } from '@angular/core';

// Permet de définir l'architecture d'un composant
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular - Préparation';
}
