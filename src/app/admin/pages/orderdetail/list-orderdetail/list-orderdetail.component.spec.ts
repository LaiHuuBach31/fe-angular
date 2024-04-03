import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderdetailComponent } from './list-orderdetail.component';

describe('ListOrderdetailComponent', () => {
  let component: ListOrderdetailComponent;
  let fixture: ComponentFixture<ListOrderdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrderdetailComponent]
    });
    fixture = TestBed.createComponent(ListOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
