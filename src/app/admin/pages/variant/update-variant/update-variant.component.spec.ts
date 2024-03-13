import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVariantComponent } from './update-variant.component';

describe('UpdateVariantComponent', () => {
  let component: UpdateVariantComponent;
  let fixture: ComponentFixture<UpdateVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVariantComponent]
    });
    fixture = TestBed.createComponent(UpdateVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
