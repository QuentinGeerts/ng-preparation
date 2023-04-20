import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrls: ['./exo09.component.scss']
})
export class Exo09Component {

  article: Article = { name: 'Poire', qty: 1, dateAdd: new Date() };

  cart: Article[] = [];

  product_name: string = '';
  product_qty: number = 1;

  addProduct (): void {
    if (!this.product_name || this.product_name.trim().length <= 0) return;
    if (this.product_qty < 1) return;

    let index: number = this.cart.findIndex(a => a.name === this.product_name);

    if (index < 0) 
      this.cart.push({ name: this.product_name.trim(), qty: this.product_qty, dateAdd: new Date() });
    else 
      this.cart[index].qty ++;

    this.product_name = '';
    this.product_qty = 1;
  }



}
