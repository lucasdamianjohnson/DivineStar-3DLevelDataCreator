import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFlowMainComponent } from './node-flow-main.component';

describe('NodeFlowMainComponent', () => {
  let component: NodeFlowMainComponent;
  let fixture: ComponentFixture<NodeFlowMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeFlowMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFlowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
