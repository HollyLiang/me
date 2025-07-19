import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteOutlineComponent } from './outline.component';

describe('OutlineComponent', () => {
  let component: NoteOutlineComponent;
  let fixture: ComponentFixture<NoteOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteOutlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
