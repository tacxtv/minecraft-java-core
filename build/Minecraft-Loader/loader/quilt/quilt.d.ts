/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */
export default class Quilt {
    options: any;
    versionMinecraft: any;
    on: any;
    emit: any;
    constructor(options?: {});
    downloadJson(Loader: any): Promise<any>;
    downloadLibraries(json: any): Promise<any>;
}
