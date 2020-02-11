import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesAlertsComponent } from './milestones-alerts.component';

describe('MilestonesAlertsComponent', () => {
  let component: MilestonesAlertsComponent;
  let fixture: ComponentFixture<MilestonesAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestonesAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonesAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
