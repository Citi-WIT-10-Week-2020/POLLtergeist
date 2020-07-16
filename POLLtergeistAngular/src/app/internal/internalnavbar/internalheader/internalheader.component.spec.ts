import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalheaderComponent } from './internalheader.component';

describe('InternalheaderComponent', () => {
  let component: InternalheaderComponent;
  let fixture: ComponentFixture<InternalheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
