import { Component, OnInit } from '@angular/core';
import { User, AccessToken } from '../shared/sdk/models';
import { UserApi } from '../shared/sdk/services';
import { Router } from '@angular/router';

@Component({
  selector: 'access',
  templateUrl: 'access.component.html'
})

export class AccessComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userApi: UserApi,
    private router: Router
  ) { }

  ngOnInit() { }

  register() {
    this.userApi.create(this.user).subscribe(
      (user: User) => this.login(),
      err => alert(err.message)
    );
  }

  login() {
    this.userApi.login(this.user).subscribe((token: AccessToken) =>
      this.router.navigate(['/home'])
    );
  }

}