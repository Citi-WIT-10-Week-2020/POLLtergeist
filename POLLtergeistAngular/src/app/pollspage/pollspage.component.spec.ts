import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollspageComponent } from './pollspage.component';

describe('PollspageComponent', () => {
  let component: PollspageComponent;
  let fixture: ComponentFixture<PollspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
