import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNodeAssetLibraryComponent } from './menu-node-asset-library.component';

describe('MenuNodeAssetLibraryComponent', () => {
  let component: MenuNodeAssetLibraryComponent;
  let fixture: ComponentFixture<MenuNodeAssetLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNodeAssetLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNodeAssetLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
