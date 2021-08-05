import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';

@Component({
  selector: 'app-edit-node',
  templateUrl: './edit-node.component.html',
  styleUrls: ['./edit-node.component.scss']
})
export class EditNodeComponent implements OnInit {

  constructor(public ds : DivineStar) {
    this.ds = ds;
   }

   moveOptions = [
    {
      name: "up"
    },
    {
      name: "down"
    },
  ];

  dataType : string[] = ['model','Position','Rotation'];


  ngOnInit(): void {
  }

}
