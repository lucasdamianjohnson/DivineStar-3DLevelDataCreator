import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuTopBarComponent } from './right-menu-top-bar.component';

describe('RightMenuTopBarComponent', () => {
  let component: RightMenuTopBarComponent;
  let fixture: ComponentFixture<RightMenuTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMenuTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMenuTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
