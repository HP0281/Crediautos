import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolloginComponent } from './sollogin.component';

describe('SolloginComponent', () => {
  let component: SolloginComponent;
  let fixture: ComponentFixture<SolloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
