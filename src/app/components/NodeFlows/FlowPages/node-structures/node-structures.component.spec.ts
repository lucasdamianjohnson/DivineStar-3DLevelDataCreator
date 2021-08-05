import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStructuresComponent } from './node-structures.component';

describe('NodeStructuresComponent', () => {
  let component: NodeStructuresComponent;
  let fixture: ComponentFixture<NodeStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeStructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
