import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';


@Component({
  selector: 'app-node-display',
  templateUrl: './node-display.component.html',
  styleUrls: ['./node-display.component.scss']
})
export class NodeDisplayComponent implements OnInit {

  constructor(public ds : DivineStar) {
    this.ds = ds;
   }

  ngOnInit(): void {
  }

}
