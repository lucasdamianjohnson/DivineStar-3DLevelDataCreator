/**# NodeStructuresMenuManager
 * ---
 *
 * @author Luke Johnon
 * @since 6-25-2021
 */
export class NodeStructuresMenuManager {

    options = [
        "Add Node",
        "Edit Node"
    ];
    activeOption = "Add Node";

    setActiveOption(id : string) {
        this.activeOption = id;
    }

    getOptions(){
        return this.options;
    }

}
