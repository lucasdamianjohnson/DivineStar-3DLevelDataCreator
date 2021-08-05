import type {drawFlowExportData,node} from  "../../../../Meta/DrawFlow/DrawFlowTypes";

import type Drawflow from "drawflow";

/**# NodeTemplateFlowManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class NodeTemplateFlowManager {

    editor: Drawflow;

    currentTemplate: any = {};
    nodeTypes = {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      type : "",
      assetID : "",
    };
  
    allowedConnections = {
      main: {
        position: true,
        rotation: true,
        assetID: true,
        type: true,
      },
    };


    active = false;

    addNode(id : string){

    }

    testConnection(nodeTypeOne: string, nodeTypeTwo: string) {
        if (this.allowedConnections[nodeTypeOne]) {
          if (this.allowedConnections[nodeTypeOne][nodeTypeTwo]) {
            return true;
          }
        }
    
        return false;
      }

    setEditor(editor: Drawflow) {
        this.editor = editor;
    
        this._setUpEditor();
      }
    
      _setUpEditor() {
        const self = this;
    
        /*     let html = `
            <p>This is a test node</p>
        <div><input type="text" df-name></div>
        `;
        let data = { name: "" };
    
        this.editor.addNode("github", 1, 1, 150, 300, "github", data, html, false);
    
    
        this.editor.addNode("github", 1, 1, 300, 300, "github", data, html, false); */
        const nodeStart = 700;
        const subNodeStart = 1200;


    
         let html = `
        <h3>Node {}</h3>
        `; 
        this.editor.addNode("main", 0, 1, nodeStart, 350, "main", {}, html, false);
        html = `
        <h3>Position </h3>
        <p>X Y Z</p>
        `;
        this.editor.addNode(
          "position",
          1,
          0,
          subNodeStart,
          385,
          "position",
          {},
          html,
          false
        );
        html = `
        <h3>Rotation </h3>
        <p>X Y Z</p>
        `;
        this.editor.addNode(
          "rotation",
          1,
          0,
          subNodeStart,
          500,
          "rotation",
          {},
          html,
          false
        );
        html = `
        <h3>Asset ID </h3>
        `;
        this.editor.addNode("assetID", 1, 0, subNodeStart, 200, "assetID", {}, html, false);
        html = `
        <h3>Type </h3>
        `;
        this.editor.addNode("type", 1, 0, subNodeStart, 300, "type", {}, html, false);
    
        this.editor.addConnection("1", "2", "output_1", "input_1");
        this.editor.addConnection("1", "3", "output_1", "input_1");
        this.editor.addConnection("1", "4", "output_1", "input_1");
        this.editor.addConnection("1", "5", "output_1", "input_1");
    
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



        //nodeRemoved
    
    
    
    
        this.export();
      }
    
      buildNodeTemplate() {
        if (!this.checkNode()) return;
        const data = this.export();
        const template: any = {};
    
    
        Object.keys(data.drawflow.Home.data).forEach((nodeId: string) => {
          const node = data.drawflow.Home.data[nodeId];
          console.log(node);
    
          if (node.name == "main") {
            /*             Object.keys(node.inputs).forEach( (inputId : string) => {
                  const input = node.inputs[inputId];
      
                      input.connections.forEach( (data) => {
                                  console.log(data);
                      } );
              } );
      */
            Object.keys(node.outputs).forEach((outputId: string) => {
              const output = node.outputs[outputId];
    
              output.connections.forEach((connectionData) => {
                let connectedNode = data.drawflow.Home.data[connectionData.node];
    
                const nodeData = this.nodeTypes[connectedNode.name];
                console.log(nodeData);
                template[connectedNode.name] = JSON.parse(JSON.stringify(nodeData));
              });
            });
          }
        });
    
        this.currentTemplate = template;
      }
    
      validate() {
        const data = this.export();
    
        let hasMain = false;
    
        Object.keys(data.drawflow.Home.data).forEach((nodeId: string) => {
          const node = data.drawflow.Home.data[nodeId];
          console.log(node);
    
          if (node.name == "main") {
            hasMain = true;
    
            /*             Object.keys(node.inputs).forEach( (inputId : string) => {
                const input = node.inputs[inputId];
    
                    input.connections.forEach( (data) => {
                                console.log(data);
                    } );
            } );
    */
            Object.keys(node.outputs).forEach((outputId: string) => {
              const output = node.outputs[outputId];
    
              output.connections.forEach((connectionData) => {
                let connectedNode = data.drawflow.Home.data[connectionData.node];
              });
            });
          }
        });
    
        if (!hasMain) {
          throw new Error("Does not have the main node. ");
        }
      }
    
      checkNode(): boolean {
        try {
          this.validate();
        } catch (error) {
          console.log(error.message);
          return false;
        }
    
        return true;
      }
    
      export(): drawFlowExportData {
        return <drawFlowExportData>this.editor.export();
      }

}
