import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderdetailComponent } from './update-orderdetail.component';

describe('UpdateOrderdetailComponent', () => {
  let component: UpdateOrderdetailComponent;
  let fixture: ComponentFixture<UpdateOrderdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderdetailComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
