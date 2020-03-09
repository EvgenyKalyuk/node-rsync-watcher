"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const watcher_1 = __importDefault(require("./utils/watcher"));
const get_options_1 = __importDefault(require("./utils/get-options"));
const rsync_1 = __importDefault(require("./components/rsync"));
const config_1 = __importDefault(require("./components/config"));
(async () => {
    const options = get_options_1.default();
    const config = await config_1.default.readConfigFile(options.config);
    if (Array.isArray(config)) {
        config.forEach((configItem) => {
            watcher_1.default(configItem.watchingDirs || configItem.source, () => {
                rsync_1.default(configItem);
            });
        });
    }
    if (!Array.isArray(config)) {
        watcher_1.default(config.watchingDirs || config.source, () => {
            rsync_1.default(config);
        });
    }
})();
process.on('unhandledRejection', (error) => {
    console.error('unhandledRejection received.', error);
});
//# sourceMappingURL=index.js.map