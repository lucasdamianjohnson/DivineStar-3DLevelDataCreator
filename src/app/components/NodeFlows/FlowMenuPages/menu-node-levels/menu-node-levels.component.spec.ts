import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNodeLevelsComponent } from './menu-node-levels.component';

describe('MenuNodeLevelsComponent', () => {
  let component: MenuNodeLevelsComponent;
  let fixture: ComponentFixture<MenuNodeLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNodeLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNodeLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
