import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';


@Component({
  selector: 'app-object-info-display',
  templateUrl: './object-info-display.component.html',
  styleUrls: ['./object-info-display.component.scss']
})
export class ObjectInfoDisplayComponent implements OnInit {

  constructor(private DS : DivineStar) {
    this.DS = DS;
   }

  ngOnInit(): void {
  }

}
