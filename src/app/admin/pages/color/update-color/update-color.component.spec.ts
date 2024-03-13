import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColorComponent } from './update-color.component';

describe('UpdateColorComponent', () => {
  let component: UpdateColorComponent;
  let fixture: ComponentFixture<UpdateColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateColorComponent]
    });
    fixture = TestBed.createComponent(UpdateColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
