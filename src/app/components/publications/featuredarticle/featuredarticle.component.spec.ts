import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedarticleComponent } from './featuredarticle.component';

describe('FeaturedarticleComponent', () => {
  let component: FeaturedarticleComponent;
  let fixture: ComponentFixture<FeaturedarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
