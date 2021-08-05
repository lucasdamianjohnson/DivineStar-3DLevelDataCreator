import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNodeTemplatesComponent } from './menu-node-templates.component';

describe('MenuNodeTemplatesComponent', () => {
  let component: MenuNodeTemplatesComponent;
  let fixture: ComponentFixture<MenuNodeTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNodeTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNodeTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
