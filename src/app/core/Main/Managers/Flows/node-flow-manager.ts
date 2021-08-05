import type Drawflow from "drawflow";
import type { DivineStar } from "../../DivineStar";
import { NodeTemplateFlowManager } from "./NodeTemplateFlow/node-template-flow-manager";
import { NodeAssetLibraryManager } from "./NodeAssetLibrary/node-asset-library-manager";
import { NodeStructureManager } from "./NodeStructureFlow/node-structure-manager";
import { NodeLevelManager } from "./NodeLevelFlow/node-level-manager";

/**# Node Flow Manager
 * ---
 *
 * @author Luke Johnon
 * @since 6-19-2021
 */
export class NodeFlowManager {
  nodeTemplates: NodeTemplateFlowManager = new NodeTemplateFlowManager();
  assetLibrary: NodeAssetLibraryManager = new NodeAssetLibraryManager(this.ds);
  nodeStructures: NodeStructureManager = new NodeStructureManager();
  nodeLevels: NodeLevelManager = new NodeLevelManager();


  activeEditor = "node-asset-library";

  constructor(private ds: DivineStar) {
    this.ds = ds;
  }

  setActiveEditor(id: string) {
    this.nodeTemplates.active = false;
    this.assetLibrary.active = false;
    this.nodeLevels.active = false;
    this.nodeStructures.active = false;
    this.activeEditor = id;
    switch (id) {
      case "node-templates":
        this.nodeTemplates.active = true;
        break;
      case "node-asset-library":
        this.assetLibrary.active = true;
        break;
      case "node-structures":
        this.nodeStructures.active = true;
        break;
      case "node-levels":
        this.nodeLevels.active = true;
        break;

      default:
        break;
    }
  }


  getActiveEditor() {
    switch (this.activeEditor) {
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

  passDrawFlow(id: string, editor: Drawflow) {
    if (id == "node-templates") {
      this.nodeTemplates.setEditor(editor);
    }
    if (id == "node-structures") {
      this.nodeStructures.setEditor(editor);
    }
    if (id == "node-levels") {
      this.nodeLevels.setEditor(editor);
    }
    if (id == "node-asset-library") {
      this.assetLibrary.setEditor(editor);
    }
  }


  getToNode(nodeID){
//DIVINESTAR.nodeFlowManager.nodeTemplates.editor.container.children[0].style.cssText = "transform: translate(200px, 0px) scale(1);"
const editor =     this.getActiveEditor().editor;
const node = editor.getNodeFromId(nodeID);
const x = node.pos_x;
const y = node.pos_y;


(editor as any).pos_x = x;
(editor as any).pos_y = y;


(editor as any).container.children[0].style.cssText = `transform: translate(${x}, ${y}) scale(1);`;

  }




}
