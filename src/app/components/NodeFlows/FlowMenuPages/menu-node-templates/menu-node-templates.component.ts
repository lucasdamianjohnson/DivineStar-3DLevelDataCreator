import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-menu-node-templates',
  templateUrl: './menu-node-templates.component.html',
  styleUrls: ['./menu-node-templates.component.scss']
})
export class MenuNodeTemplatesComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
