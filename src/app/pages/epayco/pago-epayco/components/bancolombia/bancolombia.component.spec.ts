import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancolombiaComponent } from './bancolombia.component';

describe('BancolombiaComponent', () => {
  let component: BancolombiaComponent;
  let fixture: ComponentFixture<BancolombiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancolombiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancolombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
