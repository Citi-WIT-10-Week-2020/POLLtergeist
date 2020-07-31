import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolldataComponent } from './polldata.component';

describe('PolldataComponent', () => {
  let component: PolldataComponent;
  let fixture: ComponentFixture<PolldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
