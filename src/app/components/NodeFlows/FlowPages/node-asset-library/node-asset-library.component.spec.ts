import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeAssetLibraryComponent } from './node-asset-library.component';

describe('NodeAssetLibraryComponent', () => {
  let component: NodeAssetLibraryComponent;
  let fixture: ComponentFixture<NodeAssetLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeAssetLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeAssetLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
