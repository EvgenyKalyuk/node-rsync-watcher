"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_config_file_1 = __importDefault(require("../../utils/read-config-file"));
class RsyncConfig {
    constructor() {
        this.data = {
            source: '',
            targetDir: '',
            server: '',
            watchingDirs: [],
            include: [],
            exclude: []
        };
    }
    async readConfigFile(configFilePath) {
        // @ts-ignore
        this.data = await read_config_file_1.default(configFilePath);
        return this.data;
    }
}
exports.default = new RsyncConfig();
//# sourceMappingURL=index.js.map