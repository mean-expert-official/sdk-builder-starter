import { Component, OnInit } from '@angular/core';
import { UserApi } from '../shared/sdk/services';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private userApi: UserApi,
    private router: Router
  ) { }

  ngOnInit() { }

  logout(): void {
    this.userApi.logout().subscribe(res => this.router.navigate(['/access']));
  }

}