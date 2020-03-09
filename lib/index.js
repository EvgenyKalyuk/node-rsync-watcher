"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_options_1 = __importDefault(require("./utils/get-options"));
const read_config_file_1 = __importDefault(require("./utils/read-config-file"));
const watcher_1 = __importDefault(require("./utils/watcher"));
// import rsyncComponent from './components/rsync';
async function init() {
    const options = get_options_1.default();
    const config = await read_config_file_1.default(options);
    if (Array.isArray(config)) {
        config.forEach((configItem) => {
            watcher_1.default(configItem.watchingDirs || configItem.source, () => {
                console.count('change');
            });
        });
    }
    else {
        watcher_1.default(config.watchingDirs || config.source, () => {
            console.count('change');
        });
    }
}
init();
//# sourceMappingURL=index.js.map