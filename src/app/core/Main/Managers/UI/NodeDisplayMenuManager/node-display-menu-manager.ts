export class NodeDisplayMenuManager {


        nodeTypes = [
                "Models",
                "Objects",
                "Physics",
                "Lights"
        ];

        activeNodeType = "Models";

        activeNodeId = '';



        get activeOption() : string { return this.activeNodeType};
        set activeOption(option: string) { this.activeNodeType = option};


        get optionList() : string[] {return this.nodeTypes};



        addToOptionsList(nodeType : string) {
            this.nodeTypes.push(nodeType);
        }



}
