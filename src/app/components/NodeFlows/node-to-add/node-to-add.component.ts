import { Component, OnInit,Input,ElementRef,Renderer2 ,ViewChild} from '@angular/core';
import { DivineStar } from '../../../core/Main/DivineStar';
import { NodesToAdd } from '../../../core/Meta/Nodes/NodesToAdd.structure';

@Component({
  selector: 'app-node-to-add',
  templateUrl: './node-to-add.component.html',
  styleUrls: ['./node-to-add.component.scss']
})
export class NodeToAddComponent implements OnInit {
  onDragStart : Function;
  onDragEnd : Function;

  @Input() data : NodesToAdd;


  @ViewChild('nodeToAdd', { static: true })
  public nodeToAdd: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef
    , private renderer: Renderer2, private ds : DivineStar) {
   
    }

    ngOnInit() {
      this.addDragEvents();
    }

  expanded = false;

  drag(event : any){
    console.log("draging!");
        console.log(event);
  }


  toggleExpand()
  {

    this.expanded ? this.expanded=false : this.expanded=true;
  }



  private addDragEvents(): void {
  
    const self = this;

    this.onDragStart = this.renderer.listen(
      this.nodeToAdd.nativeElement
      , 'dragstart'
      , (event: DragEvent): void => {
        console.log("drag start");

  
        self.ds.flowMenuManager.currentlyDragedNode = this.data.id;


      }); 

    // 8
    this.onDragEnd = this.renderer.listen(
      this.nodeToAdd.nativeElement
      , 'dragend'
      , (event: DragEvent): void => {
        console.log("drag end");
      });
  }





}



