import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/demos/demo20/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isConnected: boolean = false;
  isConnectedBehavior: boolean = false;

  constructor (private _AuthService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._AuthService.isConnected;
    this._AuthService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });

    this._AuthService.statusBehaviorSubject$.subscribe({
      next: (data: boolean) => {
        this.isConnectedBehavior = data;
        console.log(this._AuthService.statusBehaviorSubject$.getValue());
      }
    });

  }


}
