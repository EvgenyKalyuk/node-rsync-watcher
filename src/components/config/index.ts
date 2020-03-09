import readConfigFile from '../../utils/read-config-file';

class RsyncConfig {
    data = {};

    async readConfigFile(configFilePath: string) {
        this.data = await readConfigFile(configFilePath);

        return this.data;
    }
}

export default new RsyncConfig();
