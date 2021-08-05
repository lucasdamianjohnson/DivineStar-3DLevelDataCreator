import type Drawflow from "drawflow";
/**# NodeStructureManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class NodeStructureManager {
    editor : Drawflow;

    active = false;

    addNode(id : string){

    }

    setEditor(editor: Drawflow) {
        this.editor = editor;
    
        this._setUpEditor();
      }


      _setUpEditor(){

      }
}
