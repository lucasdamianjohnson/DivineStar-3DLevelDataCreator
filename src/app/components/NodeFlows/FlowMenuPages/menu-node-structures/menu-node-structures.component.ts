import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-menu-node-structures',
  templateUrl: './menu-node-structures.component.html',
  styleUrls: ['./menu-node-structures.component.scss']
})
export class MenuNodeStructuresComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
