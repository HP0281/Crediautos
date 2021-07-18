import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValEmailComponent } from './val-email.component';

describe('ValEmailComponent', () => {
  let component: ValEmailComponent;
  let fixture: ComponentFixture<ValEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
