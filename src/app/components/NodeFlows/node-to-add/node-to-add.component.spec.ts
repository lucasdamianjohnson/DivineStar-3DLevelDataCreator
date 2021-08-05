import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeToAddComponent } from './node-to-add.component';

describe('NodeToAddComponent', () => {
  let component: NodeToAddComponent;
  let fixture: ComponentFixture<NodeToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
