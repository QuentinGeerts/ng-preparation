import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo20',
  templateUrl: './demo20.component.html',
  styleUrls: ['./demo20.component.scss']
})
export class Demo20Component implements OnInit {

  isConnected: boolean = false;

  constructor (private _AuthService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._AuthService.isConnected;
    this._AuthService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  login () {
    this._AuthService.login();
    // this.isConnected = this._AuthService.isConnected;
  }

  logout () {
    this._AuthService.logout();
    // this.isConnected = this._AuthService.isConnected;
  }
}
