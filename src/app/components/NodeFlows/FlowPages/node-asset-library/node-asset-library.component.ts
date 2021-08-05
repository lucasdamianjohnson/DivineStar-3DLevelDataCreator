import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';

@Component({
  selector: 'app-node-asset-library',
  templateUrl: './node-asset-library.component.html',
  styleUrls: ['./node-asset-library.component.scss']
})
export class NodeAssetLibraryComponent implements OnInit {

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

}
