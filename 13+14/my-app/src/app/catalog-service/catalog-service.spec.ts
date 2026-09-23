import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './catalog-service';

@Component({
  selector: 'app-catalog-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-service.html',
  styleUrl: './catalog-service.css'
})
export class CatalogServiceComponent {

  categories: any[] = [];

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}