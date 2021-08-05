import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeInfoBarComponent } from './node-info-bar.component';

describe('NodeInfoBarComponent', () => {
  let component: NodeInfoBarComponent;
  let fixture: ComponentFixture<NodeInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeInfoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
