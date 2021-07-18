import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginkeyComponent } from './loginkey.component';

describe('LoginkeyComponent', () => {
  let component: LoginkeyComponent;
  let fixture: ComponentFixture<LoginkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
