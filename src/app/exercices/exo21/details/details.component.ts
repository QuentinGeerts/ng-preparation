import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input()
  set url (url: string) {
    this._service.getPokemon(url).subscribe({
      next: (data: Pokemon) => this.currentPokemon = data
    });
  }

  currentPokemon!: Pokemon;

  constructor (private _service: PokemonService) { }

}
