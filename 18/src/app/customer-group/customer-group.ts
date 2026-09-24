import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer';

@Component({
  selector: 'app-customer-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-group.html',
  styleUrl: './customer-group.css'
})
export class CustomerGroupComponent implements OnInit {
  customerGroups: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getGroupCustomers().subscribe(data => {
      this.customerGroups = data;
    });
  }
}