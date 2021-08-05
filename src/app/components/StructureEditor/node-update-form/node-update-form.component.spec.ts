import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeUpdateFormComponent } from './node-update-form.component';

describe('NodeUpdateFormComponent', () => {
  let component: NodeUpdateFormComponent;
  let fixture: ComponentFixture<NodeUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
