import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XYZUpDownComponent } from './xyzup-down.component';

describe('XYXUpDownComponent', () => {
  let component: XYZUpDownComponent;
  let fixture: ComponentFixture<XYZUpDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XYZUpDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XYZUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
