import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTypeGridComponent } from './node-type-grid.component';

describe('NodeTypeGridComponent', () => {
  let component: NodeTypeGridComponent;
  let fixture: ComponentFixture<NodeTypeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeTypeGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTypeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
