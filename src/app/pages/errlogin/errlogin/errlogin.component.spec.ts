import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrloginComponent } from './errlogin.component';

describe('ErrloginComponent', () => {
  let component: ErrloginComponent;
  let fixture: ComponentFixture<ErrloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
