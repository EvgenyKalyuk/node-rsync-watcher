"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const notification_system_1 = __importDefault(require("../notification-system"));
const logger_1 = __importDefault(require("../../utils/logger"));
exports.default = (config) => {
    let command = 'rsync -r -a -z';
    if (config.include && config.include.length) {
        config.include.forEach((item) => {
            command += ` --exclude ${item}`;
        });
    }
    if (config.exclude && config.exclude.length) {
        config.exclude.forEach((item) => {
            command += ` --exclude ${item}`;
        });
    }
    command += ` ${config.source} ${config.server}:${config.targetDir}`;
    child_process_1.exec(command, (error, stdout, stderror) => {
        if (error || stderror) {
            console.error(error);
            return logger_1.default.error('failed');
        }
        notification_system_1.default({
            message: 'Successfully synchronized'
        });
        return logger_1.default.info('success');
    });
};
//# sourceMappingURL=index.js.map