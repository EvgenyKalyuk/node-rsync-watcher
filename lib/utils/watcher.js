"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chokidar_1 = __importDefault(require("chokidar"));
const debounce_1 = __importDefault(require("lodash/debounce")); // eslint-disable-line
exports.default = (filePaths, changeHandler) => {
    chokidar_1.default
        .watch(filePaths)
        .on('all', debounce_1.default(changeHandler, 1000));
};
//# sourceMappingURL=watcher.js.map