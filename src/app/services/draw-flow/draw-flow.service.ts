import Drawflow from 'drawflow';


import { Injectable,ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawFlowService {


  drawFlows : Record<string,Drawflow> = {};

  editor : Drawflow;

  constructor() {

   }



  setUpDrawFlow(drawFlowId : string,  divRef : ElementRef<  HTMLDivElement>) : Drawflow {

    const div = divRef.nativeElement;

    const editor = new Drawflow(div);
    editor.start();

    this.editor = editor;


    this.drawFlows[drawFlowId] = editor;





    return editor;
  }

}
