import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTemplateComponent } from './art-template.component';

describe('ArtTemplateComponent', () => {
  let component: ArtTemplateComponent;
  let fixture: ComponentFixture<ArtTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
