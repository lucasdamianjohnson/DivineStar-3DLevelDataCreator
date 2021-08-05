import { Component, OnInit, Input } from '@angular/core';

type  GridData = {
      name : string,
      description ?: string,
      datadisplay : Record<string,any> | false,
      options : 
      {
          name :  string,
          func : Function 
      }[]
}[];


@Component({
  selector: 'app-node-type-grid',
  templateUrl: './node-type-grid.component.html',
  styleUrls: ['./node-type-grid.component.scss']
})
export class NodeTypeGridComponent implements OnInit {

  @Input() hideScrool: boolean = false;

  @Input() dataSet: GridData;


  constructor() { }

  ngOnInit(): void {
    console.log("%c hello from node display grid","font-size: 25px; color: cyan;");
    console.log(this.dataSet);
  }

}
