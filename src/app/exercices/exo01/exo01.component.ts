import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss']
})
export class Exo01Component {

  nom: string = 'Geerts';
  prenom: string = 'Quentin';
  email: string = 'quentin.geerts@bstorm.be';
  dateNaissance: Date = new Date(1996, 3, 3);
  genre: string = 'homme';
  langues: string[] = ['Français', 'Anglais'];
  image?: string = 'https://www.presse-citron.net/app/uploads/2022/12/avatar-2-extrait.jpg';

}
