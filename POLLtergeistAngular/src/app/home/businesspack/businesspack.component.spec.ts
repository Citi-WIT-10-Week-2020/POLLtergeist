import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspackComponent } from './businesspack.component';

describe('BusinesspackComponent', () => {
  let component: BusinesspackComponent;
  let fixture: ComponentFixture<BusinesspackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesspackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesspackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
