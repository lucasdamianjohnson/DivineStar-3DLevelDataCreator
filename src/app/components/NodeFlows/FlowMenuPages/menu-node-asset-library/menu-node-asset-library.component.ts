import { Component, OnInit,Input } from '@angular/core';
import { DivineStar } from '../../../../core/Main/DivineStar';
import { NodesToAdd } from '../../../../core/Meta/Nodes/NodesToAdd.structure';

@Component({
  selector: 'app-menu-node-asset-library',
  templateUrl: './menu-node-asset-library.component.html',
  styleUrls: ['./menu-node-asset-library.component.scss']
})
export class MenuNodeAssetLibraryComponent implements OnInit {
  @Input() currentAssetView : string;
  
  // currentAssetView = "meta";


  assetOptions = [
    {
      name : "Models",
      description : "Add a 3D model to the project.",
      datadisplay : false,
      options : [
        {
          name : "View",
          func : () => {
          
           this.ds.flowMenuManager.assetLibrary.setCurrentView("Models");
         
            //this.currentAssetView = "Models";
          }
        },
        {
          name : "Add",
          func : () => {
            console.log("sup from the thing")
          }
        }
      ]
    },
    {
      name : "Sprites",
      description : "Add a sprite to the project.",
      datadisplay : false,
      options : [
        {
          name : "View",
          func : () => {
            console.log("sup from the thing")
          }
        },
        {
          name : "Add",
          func : () => {
            console.log("sup from the thing")
          }
        }
      ]
    },
    {
      name : "Generic",
      description : "Add a gernic model.",
      datadisplay : false,
      options : [
        {
          name : "View",
          func : () => {
            console.log("sup from the thing")
          }
        },
        {
          name : "Add",
          func : () => {
            console.log("sup from the thing")
          }
        }
      ]
    },
    {
      name : "Transform Node",
      description : "Add a transform node.",
      datadisplay : false,
      options : [
        {
          name : "View",
          func : () => {
            console.log("sup from the thing")
          }
        },
        {
          name : "Add",
          func : () => {
            console.log("sup from the thing")
          }
        }
      ]
    }


]; 
nodesToAdd = ['hello','fc']
/* 
nodesToAdd : NodesToAdd[] =  [
  {
      name : "Model",
      id : "model",
      shotdesc : "Defines the asset as a static model.",
      desc : "Allows for node template creation of models to be added to a level structure."
  },
  {
      name : "Object",
      id : "object",
      shotdesc : "Defines the asset as a object.",
      desc : "Allows for node template creation of objects to be added to a level structure."
  },
  {
      name : "Physics",
      id : "physics",
      shotdesc : "Defines the asset as a physics object.",
      desc : "Allows for node template creation of physics object to be added to a level structure."
  },
  
    ]; */

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {
  }

  setView ( view : string ) {
    this.currentAssetView = view;
  }

  addNewModel(){
    this.currentAssetView = "Add New Model";
  }


}
