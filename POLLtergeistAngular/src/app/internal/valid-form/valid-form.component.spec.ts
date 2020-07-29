import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFormComponent } from './valid-form.component';

describe('ValidFormComponent', () => {
  let component: ValidFormComponent;
  let fixture: ComponentFixture<ValidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
