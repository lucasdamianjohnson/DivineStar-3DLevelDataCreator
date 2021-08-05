import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFlowRightMenuComponent } from './node-flow-right-menu.component';

describe('NodeFlowRightMenuComponent', () => {
  let component: NodeFlowRightMenuComponent;
  let fixture: ComponentFixture<NodeFlowRightMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeFlowRightMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFlowRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
