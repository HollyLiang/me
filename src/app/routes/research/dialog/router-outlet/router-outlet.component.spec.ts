import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterOutletComponent } from './router-outlet.component';

describe('RouterOutletComponent', () => {
  let component: RouterOutletComponent;
  let fixture: ComponentFixture<RouterOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
