import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedinternalComponent } from './sharedinternal.component';

describe('SharedinternalComponent', () => {
  let component: SharedinternalComponent;
  let fixture: ComponentFixture<SharedinternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedinternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedinternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
