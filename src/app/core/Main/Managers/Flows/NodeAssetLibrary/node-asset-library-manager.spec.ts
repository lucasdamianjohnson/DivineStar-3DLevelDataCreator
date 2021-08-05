import { NodeAssetLibraryManager } from './node-asset-library-manager';
import {DivineStar} from "../../../DivineStar";
declare const ds : DivineStar;
describe('NodeAssetLibraryManager', () => {
  it('should create an instance', () => {
    expect(new NodeAssetLibraryManager(ds)).toBeTruthy();
  });
});
