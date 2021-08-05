import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-flow-data-set-button',
  templateUrl: './node-flow-data-set-button.component.html',
  styleUrls: ['./node-flow-data-set-button.component.scss']
})
export class NodeFlowDataSetButtonComponent implements OnInit {

  @Input() option : string;
  @Input() activeOption : string;

  constructor() { }

  ngOnInit(): void {
  }

}
