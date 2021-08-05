import { Component, OnInit } from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';

@Component({
  selector: 'app-asset-library',
  templateUrl: './asset-library.component.html',
  styleUrls: ['./asset-library.component.scss']
})
export class AssetLibraryComponent implements OnInit {

  currentAssetView = "meta";



  assetOptions = [
    {
      name : "Models",
      description : "Add a 3D model to the project.",
      datadisplay : false,
      options : [
        {
          name : "View",
          func : () => {
          
            this.currentAssetView = "Models";
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
    }


];


  constructor(public ds : DivineStar) {
    this.ds = ds;
   }

  ngOnInit(): void {
  }




  setView ( view : string ) {
    this.currentAssetView = view;
  }

  addNewModel(){
    this.currentAssetView = "Add New Model";
  }

}
