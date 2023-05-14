import { Component, OnInit } from '@angular/core';
import { Pokedex } from './models/pokedex.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-exo21',
  templateUrl: './exo21.component.html',
  styleUrls: ['./exo21.component.scss']
})
export class Exo21Component implements OnInit {

  private pokeAPI = "https://pokeapi.co/api/v2/pokemon";
  currentTwenty!: Pokedex;

  constructor (private _service: PokemonService) { }

  ngOnInit (): void {
    this.loadData(this.pokeAPI);
  }

  loadData (url: string): void {
    this._service.getPokedex(url).subscribe({
      next: (data: Pokedex) => this.currentTwenty = data,
      error: (error) => alert("Une erreur s'est prodite \n" + error.message)
    });
  }

  selectedUrl!: string;
  showDetail (url: string) {
    this.selectedUrl = url;
  }

  closeDetails () {
    this.selectedUrl = '';
  }

}
