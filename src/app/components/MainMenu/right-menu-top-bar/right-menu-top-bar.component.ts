import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';

@Component({
  selector: 'app-right-menu-top-bar',
  templateUrl: './right-menu-top-bar.component.html',
  styleUrls: ['./right-menu-top-bar.component.scss']
})
export class RightMenuTopBarComponent implements OnInit {

  ds: DivineStar;
  constructor(ds: DivineStar) {
    this.ds = ds;
   }

  ngOnInit(): void {
  }


  setOption(option: string)
  {
    this.ds.rightMenuManager.activeOption = option;
  }

}
