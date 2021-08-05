import { Injectable, ElementRef, NgZone } from "@angular/core";
import * as BABYLON from "babylonjs";
import 'babylonjs-materials';

@Injectable({
  providedIn: "root",
})
export class EngineService {
  public constructor(private ngZone: NgZone) {}
  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private scene: BABYLON.Scene;
  private light: BABYLON.Light;
  private camera: BABYLON.FreeCamera;

  public getScene(){
    return this.scene;
  }
  public getEngine() {
    return this.engine;
  }

  public createScene(canvasElm: ElementRef<HTMLCanvasElement>): void {
    const canvas = canvasElm.nativeElement;
    this.canvas = canvas;
    console.log("%c creating scene", "font-size: 30px; color: blue;");
    console.log(canvas);
    // Then, load the Babylon 3D engine:
    const engine = new BABYLON.Engine(canvas, true);
    this.engine = engine;
    // create a basic BJS Scene object
    const scene = new BABYLON.Scene(engine);
    this.scene = scene;
    // this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

    // create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(5, 10, -20),
      scene
    );

    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    scene.activeCamera = camera;
    // attach the camera to the canvas
    camera.attachControl(canvas, false);


    scene.clearColor = new BABYLON.Color4(.25,.25,.25,1);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    const light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );


/*     var ground = BABYLON.Mesh.CreateGround("display-ground",100,100,1,scene);
    ground.material = new (BABYLON as any).GridMaterial("groundMaterial", scene);
    
 */



  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        //   console.log('rendering!!');

        this.scene.render();
      };

      window.addEventListener("DOMContentLoaded", () => {
        this.engine.runRenderLoop(rendererLoopCallback);
        console.log("run render loop 2 ");
      });

      window.addEventListener("resize", () => {
        this.engine.resize();
      });
    });
  }
}
