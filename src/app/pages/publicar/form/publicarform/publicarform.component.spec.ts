import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarformComponent } from './publicarform.component';

describe('PublicarformComponent', () => {
  let component: PublicarformComponent;
  let fixture: ComponentFixture<PublicarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
