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

    let index: number = this.cart.findIndex(a => a.name.trim().toLocaleLowerCase() === this.product_name.trim().toLowerCase());

    if (index < 0)
      this.cart.push({ name: this.product_name.trim(), qty: this.product_qty, dateAdd: new Date() });
    else
      this.cart[index].qty += this.product_qty;

    this.product_name = '';
    this.product_qty = 1;

    document.getElementById('product_name')?.focus();
  }

  removeProduct (article: Article): void {
    this.cart = this.cart.filter(a => a != article);
  }

  increase (index: number): void {
    this.cart[index].qty++;
  }

  decrease (index: number): void {
    this.cart[index].qty--;
    if (this.cart[index].qty === 0) this.removeProduct(this.cart[index]);
  }

}
