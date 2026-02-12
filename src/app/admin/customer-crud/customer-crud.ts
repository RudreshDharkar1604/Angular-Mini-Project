import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-customer-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-crud.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomerCrudComponent implements OnInit {

  customers: any[] = [];

  formCustomer = {
    id: null,
    name: '',
    email: '',
    password: '',
    role: 'customer'
  };

  isEditMode = false;

  constructor(
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit() {
    this.loadCustomers();
  }

  // get all customers
  loadCustomers() {
  console.log("before values:", this.customers);
  this.customerService.getCustomers().subscribe((res: any) => {
    console.log("this is response ",res);
    
    this.customers = res;
    this.cdr.markForCheck();
    console.log("after values:", this.customers); 
  });
}


  // ADD customer
  addCustomer() {
    this.customerService.addCustomer(this.formCustomer).subscribe(() => {
      this.resetForm();
      this.loadCustomers();
    });
  }

  // CLICK EDIT BUTTON
  editCustomer(customer: any) {
    this.formCustomer = {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      password: '',
      role: customer.role || 'customer'
    };
    this.isEditMode = true;
    this.loadCustomers();
    console.log("this is curstom", this.customers);
    
  }

  // UPDATE customer
  updateCustomer() {
    if (!this.formCustomer.id) return;

    this.customerService
      .updateCustomer(this.formCustomer.id, this.formCustomer)
      .subscribe(() => {
        this.resetForm();
        this.loadCustomers();
      });
  }

  // DELETE
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }

  // RESET FORM
  resetForm() {
    this.formCustomer = {
      id: null,
      name: '',
      email: '',
      password: '',
      role: 'customer'
    };
    this.isEditMode = false;
  }
}
