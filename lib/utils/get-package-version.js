"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const packageJsonFilePath = path_1.default.resolve(__dirname, '..', '..', 'package.json');
exports.default = async () => {
    return new Promise((resolve, reject) => {
        return fs_1.readFile(packageJsonFilePath, (error, data) => {
            if (error) {
                throw reject(Error);
            }
            let packageData = {};
            try {
                packageData = JSON.parse(data.toString());
            }
            catch (error) {
                throw reject(new Error(error));
            }
            return resolve(packageData.version);
        });
    });
};
//# sourceMappingURL=get-package-version.js.map