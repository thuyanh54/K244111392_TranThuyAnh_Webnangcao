import { Routes } from '@angular/router';
import { CatalogServiceComponent } from './catalog-service/catalog-service.component';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogServiceComponent
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  }
];