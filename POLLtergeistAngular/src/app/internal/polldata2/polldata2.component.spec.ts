import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Polldata2Component } from './polldata2.component';

describe('Polldata2Component', () => {
  let component: Polldata2Component;
  let fixture: ComponentFixture<Polldata2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Polldata2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Polldata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
