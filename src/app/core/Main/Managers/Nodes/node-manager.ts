export class NodeManager {


    currentNodeData = {
        "Models" : {
           "0": {
                "id": "0",
                "type": "generic-cube",
                 "position" : {
                     "x" : 0,
                     "y" : 0,
                     "z" : 0
                 },
                 "rotation" : {
                    "x" : 0,
                    "y" : 0,
                    "z" : 0
                }
            }
        },
        "Objects" : {},
        "Physics" : {},
        "Lights" : {}
    };


    

    getNodeData(nodeType : string, nodeId : string) {

        return this.currentNodeData[nodeType][nodeId];
    }

    getNodeDataKeys(nodeType : string) {

        return Object.keys(this.currentNodeData[nodeType]);
    }



}
