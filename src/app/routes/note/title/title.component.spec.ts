import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: NoteTitleComponent;
  let fixture: ComponentFixture<NoteTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTitleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
