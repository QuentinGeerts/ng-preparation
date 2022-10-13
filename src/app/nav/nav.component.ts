import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeauthService } from '../demo/services/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isConnected!: boolean;
  serviceSub!: Subscription;

  constructor (
    private _authService: FakeauthService
  ) { }

  ngOnInit (): void {
    this.isConnected = this._authService.isConnected;
    this.serviceSub = this._authService.stateSubject.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  ngOnDestroy (): void {
    this.serviceSub.unsubscribe();
  }

  login () {
    this._authService.connect();
    this.isConnected = this._authService.isConnected;
  }

  logout () {
    this._authService.disconnect();
    this.isConnected = this._authService.isConnected;
  }

}
