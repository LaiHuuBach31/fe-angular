import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoductComponent } from './create-poduct.component';

describe('CreatePoductComponent', () => {
  let component: CreatePoductComponent;
  let fixture: ComponentFixture<CreatePoductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePoductComponent]
    });
    fixture = TestBed.createComponent(CreatePoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
