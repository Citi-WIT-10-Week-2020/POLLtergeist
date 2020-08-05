import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsurveyComponent } from './viewsurvey.component';

describe('ViewsurveyComponent', () => {
  let component: ViewsurveyComponent;
  let fixture: ComponentFixture<ViewsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
