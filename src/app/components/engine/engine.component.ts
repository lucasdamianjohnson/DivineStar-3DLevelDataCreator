import {Component,  ElementRef, OnInit, ViewChild   } from '@angular/core';

import { EngineService } from '../../services/engine/engine.service';
@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService) { }

  public ngOnInit(): void {
    console.log("%c sup from the engine","font-size: 30px; color: purple");  

      this.engServ.createScene(this.rendererCanvas);
      this.engServ.animate();

  }

}
