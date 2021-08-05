import { DivineStar } from "../../../DivineStar";

/** # DialogManager
 * ---
 * Handles the electron dialog communication.
 * Mostly handles the file explorer.
 * @author Luke Johnsn
 * @since 6-17-2021
 */
export class DialogManager {
  ds: DivineStar;

  /**Used to for the promise of getting a file path.
   *
   */
  waitingForFilePath = false;

  /**The returned data from the promse.
   *
   */
  returnedFilePathData: any = {};

  constructor(ds: DivineStar) {
    this.ds = ds;

    this._init();
  }

  _init() {
    const ds = this.ds;
    const self = this;

    ds.electronServ.ipcRenderer.on(
      "got-file-paths",
      (event: any, data: any) => {
        console.log("got file paths");
        console.log(event, data);
        self.waitingForFilePath = false;
        self.returnedFilePathData = data;
      }
    );
  }

  openFileExplorer() {
    this.ds.electronServ.sendMessageToMain("open-file-explorer", {});
  }

  getSingleFilePath() {
    const self = this;
    const prom = new Promise((resolve, reject) => {
      self.waitingForFilePath = true;
      self.openFileExplorer();
      const check = () => {
        if (self.waitingForFilePath) {
          setTimeout(() => {
            check();
          }, 100);
        } else {
          resolve(this.returnedFilePathData);
        }
      };
      check();
    });
    return prom;
  }
}
