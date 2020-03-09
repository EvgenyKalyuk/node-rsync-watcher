import { ConfigType } from '../../types/config.type';
export interface IRsyncConfig {
    data: ConfigType;
    readConfigFile: (configFilePath: string) => Promise<ConfigType>;
}
