import { IRsyncConfig } from './config.interface';
declare class RsyncConfig implements IRsyncConfig {
    data: {
        source: string;
        targetDir: string;
        server: string;
        watchingDirs: never[];
        include: never[];
        exclude: never[];
    };
    readConfigFile(configFilePath: string): Promise<{
        source: string;
        targetDir: string;
        server: string;
        watchingDirs: never[];
        include: never[];
        exclude: never[];
    }>;
}
declare const _default: RsyncConfig;
export default _default;
