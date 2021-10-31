import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyProductComponent } from './body-product.component';

describe('BodyProductComponent', () => {
  let component: BodyProductComponent;
  let fixture: ComponentFixture<BodyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
