import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFlowDataSetButtonComponent } from './node-flow-data-set-button.component';

describe('NodeFlowDataSetButtonComponent', () => {
  let component: NodeFlowDataSetButtonComponent;
  let fixture: ComponentFixture<NodeFlowDataSetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeFlowDataSetButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFlowDataSetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
