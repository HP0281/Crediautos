import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiosComponent } from './questios.component';

describe('QuestiosComponent', () => {
  let component: QuestiosComponent;
  let fixture: ComponentFixture<QuestiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
