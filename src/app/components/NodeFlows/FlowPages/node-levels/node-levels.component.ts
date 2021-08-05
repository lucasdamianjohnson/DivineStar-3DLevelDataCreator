import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-node-levels',
  templateUrl: './node-levels.component.html',
  styleUrls: ['./node-levels.component.scss']
})
export class NodeLevelsComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
