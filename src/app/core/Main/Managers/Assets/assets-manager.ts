import { DivineStar } from "../../DivineStar";

type ModelData = {
  name: string;
};
/* {
    name : "Models",
    description : "Add a 3D model to the project.",
    datadisplay : false,
    options : [
      {
        name : "View",
        func : () => {
          console.log("sup from the thing")
        }
      },
      {
        name : "Add",
        func : () => {
          console.log("sup from the thing")
        }
      }
    ]
  }, */

/**# Assets Manager
 * ---
 * Handles the assets for the current project
 *
 * @author Luke Johnson
 * @since 6-22-2021
 */
export class AssetsManager {
  models: Record<string, BABYLON.Mesh> = {};

  modelData: Record<string, ModelData> = {};
  ds: DivineStar;

  constructor(ds: DivineStar) {
    this.ds = ds;
    this._init();
  }

  _init() {
    this.modelData["model1"] = {
      name: "model1",
    };
    this.modelData["model2"] = {
      name: "model2",
    };
    this.modelData["model3"] = {
      name: "model3",
    };
  }

  getAssetKeys(assetType: string) {
    if (assetType == "Models") {
      return Object.keys(this.modelData);
    }
  }

  loadSignleModel(id: string, name: string, path: string) {
    const scene = <any>this.ds.engServ.getScene();
    const engine = <any>this.ds.engServ.getEngine();
    console.log(path);
    const fileName = path.replace(/^.*[\\\/]/, "");
    const directory = path.replace(fileName, "");

    BABYLON.SceneLoader.ImportMesh(
      null,
      directory,
      fileName,
      scene,
      function (meshes, particleSystems, skeletons) {
        console.log("loaded mesh");
        console.log(meshes);
        const material = <BABYLON.PBRMaterial>meshes[0].material;

        material.albedoTexture.hasAlpha = true;

        material.useAlphaFromAlbedoTexture = true;

        material.transparencyMode = BABYLON.PBRMaterial.MATERIAL_ALPHATEST;

        (material as any).samplingMode = BABYLON.Texture.NEAREST_SAMPLINGMODE;

        let turl = (material as any).albedoTexture.url;

        let texture = new BABYLON.Texture(turl, scene);

        texture.onLoadObservable.add(() => {
          texture.updateSamplingMode(BABYLON.Texture.NEAREST_NEAREST_MIPLINEAR);
        });

        texture.anisotropicFilteringLevel = 0;
      }
    );
  }

  getDisplayData(assetType: string) {
    const displayDataArray = [];

    if (assetType == "Models") {
      const keys = this.getAssetKeys("Models");

      keys.forEach((key: string) => {
        const modelData = this.modelData[key];
        const modelDataObject = <any>{};
        modelDataObject.name = modelData.name;
        modelDataObject.datadisplay = false;
        modelDataObject.options = [];
        modelDataObject.options.push({
          name: "View",
          func: () => {},
        });
        modelDataObject.options.push({
          name: "Delete",
          func: () => {},
        });

        displayDataArray.push(modelDataObject);
      });
    }

    return displayDataArray;
  }
}
