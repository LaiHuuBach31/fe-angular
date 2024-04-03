import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderdetailComponent } from './create-orderdetail.component';

describe('CreateOrderdetailComponent', () => {
  let component: CreateOrderdetailComponent;
  let fixture: ComponentFixture<CreateOrderdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrderdetailComponent]
    });
    fixture = TestBed.createComponent(CreateOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
