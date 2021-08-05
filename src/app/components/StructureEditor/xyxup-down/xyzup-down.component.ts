import { Component,Input, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';
@Component({
  selector: 'app-xyzup-down',
  templateUrl: './xyzup-down.component.html',
  styleUrls: ['./xyzup-down.component.scss']
})
export class XYZUpDownComponent implements OnInit {

  @Input() type: string;
  @Input() nodeId: string;
  @Input() title: string;
  @Input() small: boolean;
  affectFunction : (id: string, direction: string, value?:number ) => {};

  constructor(public ds:DivineStar) {
    this.ds = ds;
   }

  ngOnInit(): void {
  }

  onClick(direction: string, value:number) {



    switch (this.type) {
      case 'model':
      //  this.ds.modelManager.moveModel(this.nodeId,direction,value);
        break;
      case 'CrossHairs' : 

    //   this.ds.crossHairs.moveCrossHairs(direction);
      break;
    
      default:
        break;
    }



  }

}
