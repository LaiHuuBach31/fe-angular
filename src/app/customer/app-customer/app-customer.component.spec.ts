import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomerComponent } from './app-customer.component';

describe('AppCustomerComponent', () => {
  let component: AppCustomerComponent;
  let fixture: ComponentFixture<AppCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCustomerComponent]
    });
    fixture = TestBed.createComponent(AppCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
