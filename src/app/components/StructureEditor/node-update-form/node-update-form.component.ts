import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder}  from '@angular/forms';
import { DivineStar } from '../../../core/Main/DivineStar';
import { GenericNodeData } from '../../../core/Meta/Nodes/GenericNodeData.structure';
@Component({
  selector: 'app-node-update-form',
  templateUrl: './node-update-form.component.html',
  styleUrls: ['./node-update-form.component.scss']
})
export class NodeUpdateFormComponent implements OnInit {

  @Input() type : string;
  @Input() set NodeId (NodeId:string) {
    console.log("this was set");
    console.log(NodeId);
        this._NodeId = NodeId;
        this.initForm();
  }
  get NodeId() {
    return this._NodeId ;
  } 

  _NodeId : string;

  objectForm: FormGroup;

  changed = false;

  ds: DivineStar;

  data:GenericNodeData 

  options = {
    position: true,
    rotation: true,
    otherdata: true
  }
  baseId : string;
  
  



  constructor(ds: DivineStar,private fb: FormBuilder) { 
    this.ds = ds;
  }

  ngOnInit(): void {





 this.initForm();

   
  }


  initForm()
  {

    switch (this.type) {
      case 'Models' : 
       
       //this.data = this.ds.modelManager.levelModels[this.NodeId].modelNodeData;
       this.data = this.ds.nodeManager.currentNodeData['Models'][this.NodeId];
        console.log(this.data);
        this.options.otherdata = false;
        break;

      case 'CrossHairs':
       this.options.rotation = false;
       this.options.otherdata = true;
       this.baseId = this.type;
    //   this.data = this.ds.crossHairs.formData;
        break;
    
      default:
        this.baseId = this.NodeId;
        break;
    }

  
  
    this.objectForm = this.fb.group({});

      if(this.options.position) {
       this.objectForm.addControl('positionX',this.fb.control(this.data.position.x));
       this.objectForm.addControl('positionY',this.fb.control(this.data.position.y));
        this.objectForm.addControl('positionZ',this.fb.control(this.data.position.z));
      }

      if(this.options.rotation) {
        this.objectForm.addControl('rotationX',this.fb.control( (this.data as GenericNodeData).rotation.x));
        this.objectForm.addControl('rotationY',this.fb.control( (this.data as GenericNodeData).rotation.y));
         this.objectForm.addControl('rotationZ',this.fb.control( (this.data as GenericNodeData).rotation.z));
       }

       this.objectForm.addControl('color',this.fb.control(''));

       if(this.options.otherdata) {
         
          for(let otherdata of  <any>this.data?.otherdata) {
            for(let member of  <any>otherdata.members) {
                  this.objectForm.addControl(member.name,this.fb.control(member.value));

            }
          }


       }



  }





  changeUpdate($event : any)
  {
    console.log('hello');
    console.log($event)
    this.changed = true;
  }

  update() {



    
  const pData = [this.objectForm.controls.positionX.value, 
    this.objectForm.controls.positionY.value, this.objectForm.controls.positionZ.value];
 // const updatePosition = this.ds.updateFormManager.getPosition(pData);
    
  let updateRotation = BABYLON.Vector3.Zero();
  if(this.options.rotation){
  const rData = [this.objectForm.controls.rotationX.value, 
    this.objectForm.controls.rotationY.value, this.objectForm.controls.rotationZ.value];
//  updateRotation = this.ds.updateFormManager.getPosition(rData);
  }



  //  console.log(this.objectForm.controls.positionX.value);
    switch (this.type) {
      case "Model":

   //   this.ds.modelManager.levelModels[this.data.id].updatePositionRotation(updatePosition,updateRotation)
    
      break;

      case 'CrossHairs':
   //     this.ds.crossHairs.updateCrossHairs(updatePosition);

        const hex = this.objectForm.controls.color.value;
        const alpha = this.objectForm.controls.alpha.value;
     //   this.ds.crossHairs.updateCrossHairsColor(this.ds.updateFormManager.getColor3(hex),alpha);
        break;
      
      
    
      default:
  
        break;
    }


    console.log(this.objectForm);
    this.changed = false;


    return true;
  }

}
