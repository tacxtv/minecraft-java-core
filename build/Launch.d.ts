/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */
type loader = {
    path?: string;
    type?: string;
    build?: string;
    enable?: boolean;
};
type screen = {
    width?: number;
    height?: number;
    fullscreen?: boolean;
};
type memory = {
    min?: string;
    max?: string;
};
type LaunchOPTS = {
    url: string | null;
    files: any;
    authenticator: any;
    timeout?: number;
    path: string;
    version: string;
    instance?: string;
    detached?: boolean;
    downloadFileMultiple?: number;
    intelEnabledMac?: boolean;
    loader: loader;
    mcp: any;
    verify: boolean;
    ignored: string[];
    JVM_ARGS: string[];
    GAME_ARGS: string[];
    javaPath: string;
    screen: screen;
    memory: memory;
};
export default class Launch {
    options: LaunchOPTS;
    on: any;
    emit: any;
    constructor();
    Launch(opt: LaunchOPTS): Promise<any>;
    start(): Promise<any>;
    DownloadGame(): Promise<any>;
}
export {};
