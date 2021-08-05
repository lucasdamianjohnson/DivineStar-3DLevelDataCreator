import { Component, OnInit, Input, HostListener } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DivineStar } from "../../../../../core/Main/DivineStar";
@Component({
  selector: "app-add-asset-form",
  templateUrl: "./add-asset-form.component.html",
  styleUrls: ["./add-asset-form.component.scss"],
})
export class AddAssetFormComponent implements OnInit {
  assetForm: FormGroup;

  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }

  constructor(private ds: DivineStar, private fb: FormBuilder) {
    this._init();
  }

  _init() {
    this.assetForm = this.fb.group({});

    this.assetForm.addControl("id", this.fb.control(""));
    this.assetForm.addControl("name", this.fb.control(""));
    this.assetForm.addControl("file-path", this.fb.control(""));
    this.assetForm.addControl("file-name", this.fb.control(""));
    this.assetForm.addControl("has-alpha", this.fb.control(false));
    this.assetForm.addControl("nearest-sampiling-mode", this.fb.control(false));
    this.assetForm.addControl("external-asset", this.fb.control(false));
    this.assetForm.addControl("export-path", this.fb.control(""));
    this.assetForm.addControl("export-file-name", this.fb.control(""));
  }

  locateFile() {
    (async () => {
      type fileData = {
        canceled: boolean;
        filePaths: string[];
      };
      const data = <fileData>await this.ds.dialogManager.getSingleFilePath();
      console.log(data);

      const path = data.filePaths[0];

      const fileName = path.replace(/^.*[\\\/]/, "");
      const directory = path.replace(fileName, "");
      this.assetForm.controls["file-path"].setValue(directory);
      this.assetForm.controls["file-name"].setValue(fileName);
      //  this.ds.assetsManager.loadSignleModel("test","test",data.filePaths[0]);
    })();
  }

  _validiate(): boolean {
    let valid = true;
    if (this.assetForm.controls["id"].value == "") {
      valid = false;
    }
    if (this.assetForm.controls["name"].value == "") {
      valid = false;
    }

    if (this.assetForm.controls["file-path"].value == "") {
      valid = false;
    }

    if (this.assetForm.controls["file-name"].value == "") {
      valid = false;
    }
    if (this.assetForm.controls["external-asset"].value) {
      if (this.assetForm.controls["export-path"].value == "") {
        valid = false;
      }

      if (this.assetForm.controls["export-file-name"].value == "") {
        valid = false;
      }
    }

    return valid;
  }

  addAsset() {
    console.log("adding asset");

    if (this._validiate()) {
      console.log("%c add asset form is valid", "font-size: 30px; color: blue");

      const assetData = {
        id: this.assetForm.controls["id"].value,
        type : this.ds.flowMenuManager.assetLibrary.assetsLookingAt(),
        name: this.assetForm.controls["name"].value,
        filePath: this.assetForm.controls["file-path"].value,
        fileName: this.assetForm.controls["file-name"].value,
        externalAsset: this.assetForm.controls["external-asset"].value,
      };

      this.ds.nodeFlowManager.assetLibrary.addAssetNode(assetData);
      this.ds.flowMenuManager.assetLibrary.setCurrentView("Models");
    }
  }

  ngOnInit(): void {}
}
