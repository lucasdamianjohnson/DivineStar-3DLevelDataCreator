import { Component,ElementRef, OnInit,ViewChild,Input,Renderer2 } from '@angular/core';
import { DivineStar } from '../../core/Main/DivineStar';
import { DrawFlowService } from '../../services/draw-flow/draw-flow.service';

@Component({
  selector: 'app-draw-flow',
  templateUrl: './draw-flow.component.html',
  styleUrls: ['./draw-flow.component.scss']
})
export class DrawFlowComponent implements OnInit {

  @Input() id: string; 
  @Input() active: boolean = false;

  @ViewChild('drawFlowDiv', { static: true })
  public drawFlowDiv: ElementRef<HTMLDivElement>;




  public constructor(private drawFlow: DrawFlowService, public ds : DivineStar,private renderer: Renderer2) {
    this.drawFlow = drawFlow;
    this.ds = ds;
   }

  ngOnInit(): void {


  const editor =   this.drawFlow.setUpDrawFlow(this.id, this.drawFlowDiv);

  this.ds.passDrawFlow(this.id,editor);
  this.addOnDragEvents();
  }

   allowDrop(ev) {
    ev.preventDefault();
  }
  

  
   drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  

  onDragEnter : Function;
  onDragLeave : Function;
  onDragOver : Function;
  onDrop : Function;

  private addOnDragEvents(): void {
    // Drag Enter
    this.onDragEnter = this.renderer.listen(
      this.drawFlowDiv.nativeElement
      , 'dragenter'
      , (event: DragEvent): void => {
        this.handleDragEnter(event);
      });
    this.onDragLeave = this.renderer.listen(
      this.drawFlowDiv.nativeElement
      , 'dragleave'
      , (event: DragEvent): void => {
        this.handleDragLeave(event);
      });
    // Drag Over
    this.onDragOver = this.renderer.listen(
      this.drawFlowDiv.nativeElement
      , 'dragover'
      , (event: DragEvent): void => {
        this.handleDragOver(event);
      });
    // Drag Drop
    this.onDrop = this.renderer.listen(
      this.drawFlowDiv.nativeElement
      , 'drop'
      , (event: DragEvent): void => {
        this.handleDrop(event);
      });
  }


  handleDragEnter(evt){
console.log("drag enter");
  }

  handleDragLeave(evt){
    console.log("drag leave");
  }

  handleDragOver(evt){
    console.log("drag over");
    evt.preventDefault();
  }

  handleDrop(evt){
    console.log("drag drop");
    console.log(this.ds.flowMenuManager.currentlyDragedNode );
    console.log(evt);

    
    this.ds.nodeFlowManager.getActiveEditor().addNode( this.ds.flowMenuManager.currentlyDragedNode,evt.clientX,evt.clientY);
  }

}
