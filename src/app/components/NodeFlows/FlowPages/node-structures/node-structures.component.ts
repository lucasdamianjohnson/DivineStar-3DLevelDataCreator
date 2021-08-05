import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-node-structures',
  templateUrl: './node-structures.component.html',
  styleUrls: ['./node-structures.component.scss']
})
export class NodeStructuresComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
