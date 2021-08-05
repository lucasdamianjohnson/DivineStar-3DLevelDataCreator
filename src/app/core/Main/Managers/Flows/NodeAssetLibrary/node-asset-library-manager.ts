/**Node Types
 *  definer - Just a node with a title that when clicked does something or just defines another node
 *  propertySet - A node with just text that defines a property set for a node that will be auto filled later
 *  propertyInput - A node with inputs for each instance of that nodes parent
 *  staticPropertyInput - A node with inputs that are static for all instances of the nodes parent
 */
import type Drawflow from "drawflow";
import { AssetData } from "../../../../Meta/Assets/AssetData.structure";
import { DivineStar } from "../../../DivineStar";
/**# NodeAssetLibraryManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class NodeAssetLibraryManager {
  editor: Drawflow;

  active = false;
  currentAssetStructure: any = {};
  nodeTypes = {
    model: {
      type: "definer",
      html: "<h3>Model</h3>",
      inputs: 1,
      outputs: 0,
    },
    object: {
      type: "definer",
      html: "<h3>Object</h3>",
      inputs: 1,
      outputs: 0,
    },
    physics: {
      type: "definer",
      html: "<h3>Physics</h3>",
      inputs: 1,
      outputs: 0,
    },
  };

  allowedConnections = {
    main: {
      position: true,
      rotation: true,
      assetID: true,
      type: true,
    },
  };

  constructor(private ds: DivineStar) {}

  addNode(id: string, x = 700, y = 350) {
    const editor = this.editor;

    const node = this.nodeTypes[id];

    let pos_x =
      x *
        ((editor as any).precanvas.clientWidth /
          ((editor as any).precanvas.clientWidth * editor.zoom)) -
      (editor as any).precanvas.getBoundingClientRect().x *
        ((editor as any).precanvas.clientWidth /
          ((editor as any).precanvas.clientWidth * editor.zoom));
    let pos_y =
      y *
        ((editor as any).precanvas.clientHeight /
          ((editor as any).precanvas.clientHeight * editor.zoom)) -
      (editor as any).precanvas.getBoundingClientRect().y *
        ((editor as any).precanvas.clientHeight /
          ((editor as any).precanvas.clientHeight * editor.zoom));

    this.editor.addNode(
      id,
      node.inputs,
      node.outputs,
      pos_x,
      pos_y,
      "node",
      {},
      node.html,
      false
    );
  }

  addAssetNode(assetData: AssetData) {
    const nodeStart = 700;
    const nodeStartY = 350;
    const editor = this.editor;
    let pos_x =
      nodeStart *
        ((editor as any).precanvas.clientWidth /
          ((editor as any).precanvas.clientWidth * editor.zoom)) -
      (editor as any).precanvas.getBoundingClientRect().x *
        ((editor as any).precanvas.clientWidth /
          ((editor as any).precanvas.clientWidth * editor.zoom));
    let pos_y =
      nodeStartY *
        ((editor as any).precanvas.clientHeight /
          ((editor as any).precanvas.clientHeight * editor.zoom)) -
      (editor as any).precanvas.getBoundingClientRect().y *
        ((editor as any).precanvas.clientHeight /
          ((editor as any).precanvas.clientHeight * editor.zoom));

    const externalText = assetData.externalAsset ? "yes" : "no";

    let html = `
    <h3>${assetData.name}</h3>
    <p>ID : ${assetData.id}</p>
    <p>Type : ${assetData.type}</p>
    <p>External : ${externalText}</p>
    `;
    this.editor.addNode("main", 0, 1, pos_x, pos_y, "main", {}, html, false);
  }

  setEditor(editor: Drawflow) {
    this.editor = editor;

    this._setUpEditor();
    this._setUpEditorHooks();
  }

  _setUpEditor() {}

  testConnection(nodeTypeOne: string, nodeTypeTwo: string) {
    if (this.allowedConnections[nodeTypeOne]) {
      if (this.allowedConnections[nodeTypeOne][nodeTypeTwo]) {
        return true;
      }
    }

    return false;
  }

  _setUpEditorHooks() {
    const self = this;
    //nodeUnselected
    this.editor.on("nodeUnselected", function (id) {
      self.ds.flowMenuManager.assetLibrary.unselectNode();
    });

    this.editor.on("nodeSelected", function (id) {
      
      self.ds.flowMenuManager.assetLibrary.activeOption = "Edit";
      const node = self.editor.getNodeFromId(id);
      const type = node.name;
      self.ds.flowMenuManager.assetLibrary.selectNode(type, {});

    });

    this.editor.on("nodeCreated", function (id) {
      console.log("Node created " + id);
    });
    this.editor.on("nodeRemoved", function (id) {
      console.log("Node removed ", self.editor.getNodeFromId(id));
    });
    this.editor.on("connectionCreated", function (id) {
      console.log("Connection created " + id);
      console.log(id);

      const node1 = self.editor.getNodeFromId(id.output_id);
      const node2 = self.editor.getNodeFromId(id.input_id);
      const node1Name = node1.name;
      const node2Name = node2.name;
      console.log(node1Name, node2Name);
      if (!self.testConnection(node1Name, node2Name)) {
        self.editor.removeSingleConnection(
          id.output_id,
          id.input_id,
          id.output_class,
          id.input_class
        );
      }
    });
    this.editor.on("connectionRemoved", function (id) {
      console.log("Connection removed " + id);
    });
  }
}
