import { Component, OnInit, Input, Output } from '@angular/core';
import { GenericNodeData } from '../../../core/Meta/Nodes/GenericNodeData.structure';
import { DivineStar } from '../../../core/Main/DivineStar';


@Component({
  selector: 'app-node-info-bar',
  templateUrl: './node-info-bar.component.html',
  styleUrls: ['./node-info-bar.component.scss']
})
export class NodeInfoBarComponent implements OnInit {

  @Input() data: GenericNodeData

  @Output() message: string = "";
  expanded = false;


   titleBGColor: string = "var(--primary)";
   titleColor: string = "#fff";

  self = this;

  modelOptions = [
    {
      name: "Edit",
      func: this.editModel
    },
    {
      name: "Duplicate",
      func: this.duplicateModel
    },
    {
      name: "Delete",
      func: this.deleteModel
    },

  ];

  constructor(public ds:DivineStar){
    this.ds = ds;

  }

  ngOnInit(): void {

  //  this.titleBGColor = this.ds.projectManager.defaultSettings.typeColorBindings.models[this.data.type].backgroundColor;
  //  this.titleColor = this.ds.projectManager.defaultSettings.typeColorBindings.models[this.data.type].color;
  }


  toggleExpand()
  {

    this.expanded ? this.expanded=false : this.expanded=true;
  }


  editModel(id : string,self:this)
  {

    console.log(this);
     this.message = "EditModel";
    // self.ds.activeModelEditing = id;
    self.ds.nodeDisplayMenuManager.activeNodeId = id;
   //  self.ds.paremetersMenu = "EditModel";
   self.ds.rightMenuManager.activeOption = "EditNode";
  }

  duplicateModel(id : string,self:this)
  {

  }

  deleteModel(id : string,self:this)
  {
    
  }

}
