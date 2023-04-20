import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  liste: string[] = ['pomme', 'poire', 'fraise'];

  constructor () { }

  getAll (): string[] {
    return this.liste;
  }

  getById (id: number): string {
    return this.liste[id];
  }

}
