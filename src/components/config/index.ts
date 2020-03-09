import readConfigFile from '../../utils/read-config-file';

import { IRsyncConfig } from './config.interface';

class RsyncConfig implements IRsyncConfig{
    data = {
        source: '',
        targetDir: '',
        server: '',
        watchingDirs: [],
        include: [],
        exclude: []
    };

    async readConfigFile(configFilePath: string) {
        // @ts-ignore
        this.data = await readConfigFile(configFilePath);

        return this.data;
    }
}

export default new RsyncConfig();
