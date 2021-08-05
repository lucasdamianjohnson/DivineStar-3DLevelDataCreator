import { Component, OnInit } from '@angular/core';
import {DivineStar} from "../../../core/Main/DivineStar";
@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {




  metaNodeOptions = [
          {
            name : "Models",
            datadisplay : false,
            options : [
              {
                name : "View",
                func : () => {
                  console.log("sup from the thing")
                }
              }
            ]
          }


  ];

  modelTypes = [
    {
      name: "Cube",
      id: "generic-cube",
      type: "generic",
      otherOptions : [
        {
          name: "size",
          value: 1
        }
      ]
    },
    {
      name: "Cube",
      id: "generic-cube",
      type: "generic",
      otherOptions : [
        {
          name: "size",
          value: 1
        }
      ]
    },
    

   ];

   addOptions = {
    quick: "Quick Add",
    detailed: "Add And Set"
   };

   counter: number = 0;



   constructor(public ds:DivineStar) {
     this.ds = ds;
    }

    quickAdd(id: string) : void
    {
  
      this.counter++;
      switch (id) {
        case 'generic-cube':
       //   const data = this.ds.modelManager.getModelData('generic-cube','generic',{x:0,y:this.counter,z:this.counter},{x:0,y:0,z:0});
        //  this.ds.addGenericCube(data);
          break;
      
        default:
          break;
      }
  
  
  
    }



  ngOnInit(): void {
  }

}
