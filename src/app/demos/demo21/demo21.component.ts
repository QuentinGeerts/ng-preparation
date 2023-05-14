import { Component, OnInit } from '@angular/core';
import { finalize, mergeMap } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-demo21',
  templateUrl: './demo21.component.html',
  styleUrls: ['./demo21.component.scss']
})
export class Demo21Component implements OnInit {

  products: Product[] = [];

  constructor (private _productService: ProductService) { }

  ngOnInit (): void {
    this._productService.get().subscribe((data) => this.products = data);
  }

  delete (id: number): void {
    // Sans pipe l'observable, la suppression se fait uniquement côté backend
    this._productService
      .delete(id)
      .pipe(
        mergeMap(() => this._productService.get()),
        finalize(() => console.log('Coucou'))
      )
      .subscribe((data) => this.products = data);

  }

}
