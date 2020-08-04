import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Polldata3Component } from './polldata3.component';

describe('Polldata3Component', () => {
  let component: Polldata3Component;
  let fixture: ComponentFixture<Polldata3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Polldata3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Polldata3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
