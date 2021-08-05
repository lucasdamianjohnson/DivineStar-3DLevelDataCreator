import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFlowLeftMenuComponent } from './node-flow-left-menu.component';

describe('NodeFlowLeftMenuComponent', () => {
  let component: NodeFlowLeftMenuComponent;
  let fixture: ComponentFixture<NodeFlowLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeFlowLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFlowLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
