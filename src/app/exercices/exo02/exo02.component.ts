import { Component } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component {
  nom: string = '';
  prenom: string = '';
  dateNaissance!: Date;
  genre: string = '';
  langues: string = '';
  image?: string;
}
