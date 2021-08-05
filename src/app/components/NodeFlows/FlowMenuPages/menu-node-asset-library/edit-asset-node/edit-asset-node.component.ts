import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../../core/Main/DivineStar';

@Component({
  selector: 'app-edit-asset-node',
  templateUrl: './edit-asset-node.component.html',
  styleUrls: ['./edit-asset-node.component.scss']
})
export class EditAssetNodeComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
