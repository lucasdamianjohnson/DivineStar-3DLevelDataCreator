import { DivineStar } from "../../../../DivineStar";
import { AssetLibraryMenuManager } from "../AssetLibrary/asset-library-menu-manager";
import { NodeLevelsMenuManager } from "../NodeLevels/node-levels-menu-manager";
import { NodeStructuresMenuManager } from "../NodeStructures/node-structures-menu-manager";
import { NodeTemplatesMenuManager } from "../NodeTemplates/node-templates-menu-manager";
/**# FlowMenuManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class FlowMenuManager {
  assetLibrary = new AssetLibraryMenuManager();
  nodeTemplates = new NodeTemplatesMenuManager();
  nodeStructures = new NodeStructuresMenuManager();
  nodeLevels = new NodeLevelsMenuManager();

  activeNodeOption = "node-asset-library";
  activeOption: string = "";



  currentlyDragedNode = "";

  constructor(private ds: DivineStar) {}

  getMenu(id: string) {
    switch (id) {
      case "node-asset-library":
        return this.assetLibrary;
      case "node-templates":
        return this.nodeTemplates;
      case "node-structures":
        return this.nodeStructures;
      case "node-levels":
        return this.nodeLevels;
      default:
        return this.assetLibrary;
    }
  }

  setActiveMenu(id: string) {
    this.activeOption = id;
    this.activeNodeOption = id; 
  }

  getActiveMenu() {
    switch (this.activeNodeOption) {
      case "node-asset-library":
        return this.assetLibrary;
      case "node-templates":
        return this.nodeTemplates;
      case "node-structures":
        return this.nodeStructures;
      case "node-levels":
        return this.nodeLevels;

      default:
        return this.assetLibrary;
    }
  }

  getActiveMenuOptions() {
    return this.getActiveMenu().getOptions();
  }
}
