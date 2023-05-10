import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor (private userService: UserService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log("UserResolver  resolve  state:", state);
    console.log("UserResolver  resolve  route:", route);
    const userId = route.paramMap.get('id');
    return userId ? this.userService.getUserById(userId) : null;
  }
}
