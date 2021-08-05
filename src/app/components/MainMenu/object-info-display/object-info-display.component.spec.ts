import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectInfoDisplayComponent } from './object-info-display.component';

describe('ObjectInfoDisplayComponent', () => {
  let component: ObjectInfoDisplayComponent;
  let fixture: ComponentFixture<ObjectInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectInfoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
