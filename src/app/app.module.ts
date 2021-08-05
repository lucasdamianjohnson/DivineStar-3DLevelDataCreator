import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DivineStar } from "./core/Main/DivineStar";

import { AppRoutingModule } from "./app-routing.module";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { EngineComponent } from "./components/engine/engine.component";
import { ObjectInfoDisplayComponent } from "./components/MainMenu/object-info-display/object-info-display.component";
import { TopMenuBarComponent } from "./components/MainMenu/top-menu-bar/top-menu-bar.component";
import { MainComponent } from "./components/MainMenu/main/main.component";
import { HomeComponent } from "./components/home/home.component";
import { MainMenuButtonComponent } from "./components/MainMenu/main-menu-button/main-menu-button.component";
import { RightMenuTopBarComponent } from "./components/MainMenu/right-menu-top-bar/right-menu-top-bar.component";
import { EditNodeComponent } from "./components/MenuPages/edit-node/edit-node.component";
import { AddNodeComponent } from './components/MenuPages/add-node/add-node.component';
import { MenuButtonComponent } from './components/MainMenu/menu-button/menu-button.component';
import { NodeInfoBarComponent } from './components/StructureEditor/node-info-bar/node-info-bar.component';
import { NodeDisplayComponent } from './components/MenuPages/node-display/node-display.component';
import { XYZUpDownComponent } from './components/StructureEditor/xyxup-down/xyzup-down.component';
import { NodeUpdateFormComponent } from './components/StructureEditor/node-update-form/node-update-form.component';
import { DrawFlowComponent } from './components/draw-flow/draw-flow.component';
import { NodeTemplateComponent } from './components/NodeFlows/FlowPages/node-template/node-template.component';
import { AssetLibraryComponent } from './components/MenuPages/asset-library/asset-library.component';
import { NodeTypeGridComponent } from './components/MainMenu/node-type-grid/node-type-grid.component';
import { AddAssetFormComponent } from './components/NodeFlows/FlowMenuPages/menu-node-asset-library/add-asset-form/add-asset-form.component';
import { NodeFlowRightMenuComponent } from './components/NodeFlows/node-flow-right-menu/node-flow-right-menu.component';
import { NodeFlowMainComponent } from './components/NodeFlows/node-flow-main/node-flow-main.component';
import { NodeFlowLeftMenuComponent } from './components/NodeFlows/node-flow-left-menu/node-flow-left-menu.component';
import { NodeFlowDataSetButtonComponent } from './components/NodeFlows/node-flow-data-set-button/node-flow-data-set-button.component';
import { NodeAssetLibraryComponent } from './components/NodeFlows/FlowPages/node-asset-library/node-asset-library.component';
import { NodeLevelsComponent } from './components/NodeFlows/FlowPages/node-levels/node-levels.component';
import { NodeStructuresComponent } from './components/NodeFlows/FlowPages/node-structures/node-structures.component';
import { MenuNodeAssetLibraryComponent } from './components/NodeFlows/FlowMenuPages/menu-node-asset-library/menu-node-asset-library.component';
import { MenuNodeTemplatesComponent } from './components/NodeFlows/FlowMenuPages/menu-node-templates/menu-node-templates.component';
import { MenuNodeLevelsComponent } from './components/NodeFlows/FlowMenuPages/menu-node-levels/menu-node-levels.component';
import { MenuNodeStructuresComponent } from './components/NodeFlows/FlowMenuPages/menu-node-structures/menu-node-structures.component';
import { NodeToAddComponent } from './components/NodeFlows/node-to-add/node-to-add.component';
import { EditAssetNodeComponent } from './components/NodeFlows/FlowMenuPages/menu-node-asset-library/edit-asset-node/edit-asset-node.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    ObjectInfoDisplayComponent,
    TopMenuBarComponent,
    MainComponent,
    HomeComponent,
    MainMenuButtonComponent,
    RightMenuTopBarComponent,
    EditNodeComponent,
    AddNodeComponent,
    MenuButtonComponent,
    NodeInfoBarComponent,
    NodeDisplayComponent,
    XYZUpDownComponent,
    NodeUpdateFormComponent,
    DrawFlowComponent,
    NodeTemplateComponent,
    AssetLibraryComponent,
    NodeTypeGridComponent,
    AddAssetFormComponent,
    NodeFlowRightMenuComponent,
    NodeFlowMainComponent,
    NodeFlowLeftMenuComponent,
    NodeFlowDataSetButtonComponent,
    NodeAssetLibraryComponent,
    NodeLevelsComponent,
    NodeStructuresComponent,
    MenuNodeAssetLibraryComponent,
    MenuNodeTemplatesComponent,
    MenuNodeLevelsComponent,
    MenuNodeStructuresComponent,
    NodeToAddComponent,
    EditAssetNodeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DivineStar],
  bootstrap: [AppComponent],
})
export class AppModule {}
