import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-menu-node-levels',
  templateUrl: './menu-node-levels.component.html',
  styleUrls: ['./menu-node-levels.component.scss']
})
export class MenuNodeLevelsComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
