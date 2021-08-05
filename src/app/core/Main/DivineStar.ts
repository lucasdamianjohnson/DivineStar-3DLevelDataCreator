import { Injectable, OnInit } from "@angular/core";
import { RightMenuManager } from "./Managers/UI/RightMenuManager/right-menu-manager";
import { NodeDisplayMenuManager } from "./Managers/UI/NodeDisplayMenuManager/node-display-menu-manager";
import { EngineService } from "../../services/engine/engine.service";
import { DrawFlowService } from "../../services/draw-flow/draw-flow.service";
import { NodeManager } from "./Managers/Nodes/node-manager";
import { NodeFlowManager } from "./Managers/Flows/node-flow-manager";
import { AssetsManager } from "./Managers/Assets/assets-manager";
import { ElectronService } from "../../services/electron/electron.service";
import { DialogManager } from "./Managers/Files/DialogManager/dialog-manager";
import type Drawflow from "drawflow";
import { FlowMenuManager } from "./Managers/Flows/Menu/MenuManager/flow-menu-manager";

@Injectable({
  providedIn: "root",
})
/** # DivineStar
 * ---
 * The main app.
 *
 * @author Luke Johnsn
 * @since 6-17-2021
 */
export class DivineStar implements OnInit {
  rightMenuManager: RightMenuManager = new RightMenuManager();
  nodeDisplayMenuManager: NodeDisplayMenuManager = new NodeDisplayMenuManager();
  nodeManager: NodeManager = new NodeManager();
  nodeFlowManager: NodeFlowManager = new NodeFlowManager(this);
  flowMenuManager : FlowMenuManager = new FlowMenuManager(this);


  assetsManager: AssetsManager = new AssetsManager(this);
  dialogManager: DialogManager = new DialogManager(this);

  public constructor(
    public engServ: EngineService,
    public drawFlow: DrawFlowService,
    public electronServ: ElectronService
  ) {
    console.log("%c made the divine star", "font-size:25px; color:purple; ");
    (window as any).DIVINESTAR = this;

    this.drawFlow = drawFlow;
    this.electronServ = electronServ;

    const self = this;
/*     setTimeout(() => {
      (async () => {
        type fileData = {
          canceled : boolean,
          filePaths : string[]
        };
        const data =<fileData> await self.dialogManager.getSingleFilePath();
        console.log(data);
        self.assetsManager.loadSignleModel("test","test",data.filePaths[0]);

      })();
    }, 2000); */


    this.engServ = engServ;

    this.nodeFlowManager.setActiveEditor("node-asset-library");

  }

  passDrawFlow(id: string, editor: Drawflow) {

      this.nodeFlowManager.passDrawFlow(id,editor);
    
    
  }

  ngOnInit(): void {}
}
