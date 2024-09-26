import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdupageComponent } from './aboutpage.component';

describe('EdupageComponent', () => {
  let component: EdupageComponent;
  let fixture: ComponentFixture<EdupageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdupageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
