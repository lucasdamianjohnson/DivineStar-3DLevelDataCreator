import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-node-template',
  templateUrl: './node-template.component.html',
  styleUrls: ['./node-template.component.scss']
})
export class NodeTemplateComponent implements OnInit {

  constructor(public ds : DivineStar) { }

  ngOnInit(): void {
  }

}
