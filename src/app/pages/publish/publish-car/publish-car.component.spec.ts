import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCarComponent } from './publish-car.component';

describe('PublishCarComponent', () => {
  let component: PublishCarComponent;
  let fixture: ComponentFixture<PublishCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
