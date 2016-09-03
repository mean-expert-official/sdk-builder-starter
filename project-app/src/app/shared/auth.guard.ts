import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserApi } from '../shared/sdk/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userApi: UserApi
  ) { }

  canActivate() {
    if (this.userApi.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/access']);
      return false;
    }
  }
}

