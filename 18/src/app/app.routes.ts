import { Routes } from '@angular/router';
import { CustomerGroupComponent } from './customer-group/customer-group';

export const routes: Routes = [
  { path: '', redirectTo: 'customer-group', pathMatch: 'full' },
  { path: 'customer-group', component: CustomerGroupComponent }
];