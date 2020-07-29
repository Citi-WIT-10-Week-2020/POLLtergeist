import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpollComponent } from './viewpoll.component';

describe('ViewpollComponent', () => {
  let component: ViewpollComponent;
  let fixture: ComponentFixture<ViewpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
