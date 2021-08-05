import { NodesToAdd } from "../../../../../Meta/Nodes/NodesToAdd.structure";

/**# AssetLibraryMenuManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class AssetLibraryMenuManager {
  currentAssetView = "meta";

  options = ["Add Asset", "Add Node", "Edit"];

  activeOption = "Add Asset";



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

  ];




  selectedNodeType : string = "";


  selectedNodeData : any;


  selectNode(type : string,data : any){
    this.selectedNodeType = type;
  }

  unselectNode(){
    this.selectedNodeType = "";
  }



  setActiveOption(id: string) {
    this.activeOption = id;
  }

  getOptions() {
    return this.options;
  }

  assetsLookingAt() {
    switch (this.currentAssetView) {
      case "Add New Model":
        return "model";
     default : 
        return "";
    }
  }

  setCurrentView(view: string) {
    this.currentAssetView = view;
  }
}
