import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Bắt buộc phải import Router
import { ProductService } from '../product';

@Component({
  selector: 'app-service-product-image-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-product-image-event.html',
  styleUrl: './service-product-image-event.css'
})
export class ServiceProductImageEventComponent {
  public products: any;

  // Bắt buộc phải inject Router trong constructor
  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }
  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}