import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNodeStructuresComponent } from './menu-node-structures.component';

describe('MenuNodeStructuresComponent', () => {
  let component: MenuNodeStructuresComponent;
  let fixture: ComponentFixture<MenuNodeStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNodeStructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNodeStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
