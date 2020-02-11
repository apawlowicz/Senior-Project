import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHomepageComponent } from './team-homepage.component';

describe('TeamHomepageComponent', () => {
  let component: TeamHomepageComponent;
  let fixture: ComponentFixture<TeamHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
