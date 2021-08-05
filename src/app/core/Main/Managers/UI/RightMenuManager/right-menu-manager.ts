/**# Right Menu Manager
 * ---
 * Managers the right menu.  
 * 
 * @author Luke Johnsn
 * @since 6-17-2021
 */
export class RightMenuManager {
    option: string = "CrossHairs";

    constructor() {
        
        
    }

    get activeOption() : string { return this.option};
    set activeOption(option: string) { this.option = option};
}
