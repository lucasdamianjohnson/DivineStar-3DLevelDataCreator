import { Component, OnInit,HostListener } from '@angular/core';
import {DivineStar} from "../../../core/Main/DivineStar";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-node-flow-left-menu',
  templateUrl: './node-flow-left-menu.component.html',
  styleUrls: ['./node-flow-left-menu.component.scss'],
  animations: [
    trigger('openClose', [
 
      state('open', style({
        marginLeft: '0%',
      })),
      state('closed', style({
        marginLeft: '-30.5%',
        width: '30%'
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

  ],
})
export class NodeFlowLeftMenuComponent implements OnInit {



  activeNodeFlow = "node-asset-library";


  options = [
    "test1",
    "test2"
  ];

  activeOption = "test1";

  setActiveOption(option : string){
    this.activeOption = option;
  }


  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){

  if(this.resizingMenuLeft){

    
    if(event.clientX < this.mouse.x) {
      console.log('move left');
      if(  this.menuLeftWidth  < 25) return;
      this.menuLeftWidth -= .4;
    }
    if(event.clientX > this.mouse.x) {
      console.log('move right');
      if(  this.menuLeftWidth  > 55) return;
      this.menuLeftWidth += .4;
    }


  }


  this.mouse = {
    x: event.clientX,
    y: event.clientY
 }
// console.log(this.mouse);
}


mouse = {
  x: 0,
  y: 0
}


menuLeftOpen:boolean = true;
menuLeftWidth = 30;
resizingMenuLeft = false;

currentCursor = "";

  constructor(private ds : DivineStar) { }

  ngOnInit(): void {

  }


  toggleMenuLeft() {
    this.menuLeftOpen = !this.menuLeftOpen;
    if(!this.menuLeftOpen){
      this.menuLeftWidth = 30;
    }
  }


  
mouseDown()
{
  console.log('down');
  this.currentCursor = "e-resize";
  this.resizingMenuLeft = true;
}

mouseUp()
{
 console.log('up');
 this.currentCursor = "";
 this.resizingMenuLeft = false;
}


}
