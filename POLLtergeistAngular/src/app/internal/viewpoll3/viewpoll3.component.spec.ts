import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpoll3Component } from './viewpoll3.component';

describe('Viewpoll3Component', () => {
  let component: Viewpoll3Component;
  let fixture: ComponentFixture<Viewpoll3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpoll3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpoll3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
