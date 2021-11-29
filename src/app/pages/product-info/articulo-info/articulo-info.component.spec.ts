import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloInfoComponent } from './articulo-info.component';

describe('ArticuloInfoComponent', () => {
  let component: ArticuloInfoComponent;
  let fixture: ComponentFixture<ArticuloInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
