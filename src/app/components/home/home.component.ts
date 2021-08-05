import { Component, OnInit, HostListener } from '@angular/core';
import { DivineStar } from '../../core/Main/DivineStar';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    trigger('openCloseRightMenu', [
 
      state('open', style({
        marginLeft: '0px'
      })),
      state('closed', style({
        marginLeft: '40%'
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
export class HomeComponent implements OnInit {


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

 currentCursor = "";

 themes:string[] = ['default','steel'];
  currentTheme:string = 'default';


  menuLeftOpen:boolean = true;
  menuLeftWidth = 30;


  menuRightOpen:boolean = true;




  test  = [
     {
       test: 1,
     },
     {
       test: 2
     }
   ];


  topBarOptions = [
    {
      name: "Open",
      icon: "open"
    },
    {
      name: "Save",
      icon: "save"
    }
    
  ];



//CrossHairs
 activeParmeters = '';

 parameters = [
  {
    name: 'Models'
  },
  {
    name: 'EditModel'
  },
  {
    name: 'CrossHairs'
  },

];

 activeOption = 'Models';

 options = [
    {
      name: 'All'
    },
    {
      name: 'Models'
    },
    {
      name: 'Objects'
    },
    {
      name: 'Physics'
    },
    {
      name: 'Lights'
    }

 ];

 mouse = {
   x: 0,
   y: 0
 }


 resizingMenuLeft = false;

 constructor(public ds:DivineStar){
 
 }



   void()
   {
     return false;
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


  ngOnInit(): void {
    console.log();
  }


  toggleMenuLeft() {
    this.menuLeftOpen = !this.menuLeftOpen;
    if(!this.menuLeftOpen){
      this.menuLeftWidth = 30;
    }
  }
  toggleMenuRight() {
    this.menuRightOpen = !this.menuRightOpen;
  }
  setActiveParameterOption(option: string) {
    this.activeParmeters = option;
  }

  setActiveOption(option: string) : void
  {
    console.log(option);
    this.activeOption = option;
  }
  addToTest() {

    this.test.push(
      {
        test: 3
      }
    );

  }

}






