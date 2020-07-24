import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOptionComponent } from './nested-option.component';

describe('NestedOptionComponent', () => {
  let component: NestedOptionComponent;
  let fixture: ComponentFixture<NestedOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
