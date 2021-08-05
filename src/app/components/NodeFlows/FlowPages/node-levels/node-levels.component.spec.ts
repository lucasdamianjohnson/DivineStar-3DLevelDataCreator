import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeLevelsComponent } from './node-levels.component';

describe('NodeLevelsComponent', () => {
  let component: NodeLevelsComponent;
  let fixture: ComponentFixture<NodeLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
