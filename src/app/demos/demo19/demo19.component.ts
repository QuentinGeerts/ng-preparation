import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
  styleUrls: ['./demo19.component.scss']
})
export class Demo19Component {

  constructor (private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) { }

  // LocalStorage

  usernameLocal: string = "";
  savedUsernameLocal: string = "";

  saveLocal () {
    this.localStorageService.setItem('usernameLocal', this.usernameLocal);
  }

  loadLocal () {
    this.savedUsernameLocal = this.localStorageService.getItem('usernameLocal');
  }

  clearLocal () {
    this.localStorageService.removeItem('usernameLocal');
  }

  // SessionStorage

  usernameSession: string = "";
  savedUsernameSession: string = "";

  saveSession () {
    this.sessionStorageService.setItem('usernameSession', this.usernameSession);
  }

  loadSession () {
    this.savedUsernameSession = this.sessionStorageService.getItem('usernameSession');
  }

  clearSession () {
    this.sessionStorageService.removeItem('usernameSession');
  }

}
