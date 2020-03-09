"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_notifier_1 = __importDefault(require("node-notifier"));
const path_1 = __importDefault(require("path"));
exports.default = (notifyProps) => {
    node_notifier_1.default.notify({
        ...notifyProps,
        title: 'rsync watcher',
        sound: false,
        wait: false,
        icon: path_1.default.join(__dirname, '..', '..', 'assets', 'rsync.png')
    }, (err) => {
        if (err) {
            console.log('notification error', err);
        }
    });
};
//# sourceMappingURL=index.js.map