import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajandoComponent } from './trabajando.component';

describe('TrabajandoComponent', () => {
  let component: TrabajandoComponent;
  let fixture: ComponentFixture<TrabajandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
