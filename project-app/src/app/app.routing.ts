import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './+access/access.component';
import { HomeComponent } from './+home/home.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  { path: 'access', component: AccessComponent },
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: HomeComponent, canActivate: [ AuthGuard ] }
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
