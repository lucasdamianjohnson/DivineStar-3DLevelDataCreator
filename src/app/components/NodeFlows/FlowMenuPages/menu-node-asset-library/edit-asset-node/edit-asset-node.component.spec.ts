import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssetNodeComponent } from './edit-asset-node.component';

describe('EditAssetNodeComponent', () => {
  let component: EditAssetNodeComponent;
  let fixture: ComponentFixture<EditAssetNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssetNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssetNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
