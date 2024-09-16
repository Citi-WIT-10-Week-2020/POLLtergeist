import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpoll2Component } from './viewpoll2.component';

describe('Viewpoll2Component', () => {
  let component: Viewpoll2Component;
  let fixture: ComponentFixture<Viewpoll2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpoll2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpoll2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
