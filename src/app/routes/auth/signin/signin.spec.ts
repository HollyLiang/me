import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignInPage } from './signin';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [SignInPage]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
