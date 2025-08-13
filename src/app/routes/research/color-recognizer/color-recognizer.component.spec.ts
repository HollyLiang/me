import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRecognizerComponent } from './color-recognizer.component';

describe('ColorRecognizerComponent', () => {
  let component: ColorRecognizerComponent;
  let fixture: ComponentFixture<ColorRecognizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorRecognizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorRecognizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
