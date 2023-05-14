import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver  {

  constructor (private userService: UserService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log("UserResolver  resolve  state:", state);
    console.log("UserResolver  resolve  route:", route);
    const userId = route.paramMap.get('id');
    return userId ? this.userService.getUserById(userId) : null;
  }
}
