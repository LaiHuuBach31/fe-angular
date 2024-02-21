import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoductComponent } from './list-poduct.component';

describe('ListPoductComponent', () => {
  let component: ListPoductComponent;
  let fixture: ComponentFixture<ListPoductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPoductComponent]
    });
    fixture = TestBed.createComponent(ListPoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
