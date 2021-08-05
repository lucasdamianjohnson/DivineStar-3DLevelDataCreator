import { Component, OnInit } from "@angular/core";
import { DivineStar } from "../../../core/Main/DivineStar";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";
/**
Node Templates

Asset Library 

Structure Form

Level Form

 * 
 */

@Component({
  selector: "app-node-flow-right-menu",
  templateUrl: "./node-flow-right-menu.component.html",
  styleUrls: ["./node-flow-right-menu.component.scss"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          marginLeft: "0px",
        })
      ),
      state(
        "closed",
        style({
          marginLeft: "10%",
        })
      ),
      transition("open => closed", [animate("0.25s")]),
      transition("closed => open", [animate("0.25s")]),
    ]),
  ],
})
export class NodeFlowRightMenuComponent implements OnInit {
  activeOption = "Asset Library";

  dataSets = [
    {
      name: "Node Templates",
    },
    {
      name: "Asset Library",
    },
    {
      name: "Structures",
    },
    {
      name: "Levels",
    },
  ];

  optionFuncs = {
    "Node Templates": () => {
      console.log("set active option to node templates");
      this.ds.nodeFlowManager.setActiveEditor("node-templates");
      this.ds.flowMenuManager.setActiveMenu("node-templates");
    },
    "Asset Library": () => {
      console.log("set active option to asset library");
      this.ds.nodeFlowManager.setActiveEditor("node-asset-library");
      this.ds.flowMenuManager.setActiveMenu("node-asset-library");
    },
    Structures: () => {
      console.log("set active option to structure form");
      this.ds.nodeFlowManager.setActiveEditor("node-structures");
      this.ds.flowMenuManager.setActiveMenu("node-structures");
    },
    Levels: () => {
      console.log("set active option to level form");
      this.ds.nodeFlowManager.setActiveEditor("node-levels");
      this.ds.flowMenuManager.setActiveMenu("node-levels");
    },
  };

  menuRightOpen: boolean = true;

  constructor(private ds: DivineStar) {}

  ngOnInit(): void {}

  setActiveOption(option: string) {
    console.log(option);

    this.activeOption = option;

    this.optionFuncs[option]();
  }

  toggleMenuRight() {
    this.menuRightOpen = !this.menuRightOpen;
  }
}
