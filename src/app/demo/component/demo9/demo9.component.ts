import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit, OnDestroy {

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
