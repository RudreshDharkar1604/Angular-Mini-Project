import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCrud } from './customer-crud';

describe('CustomerCrud', () => {
  let component: CustomerCrud;
  let fixture: ComponentFixture<CustomerCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
