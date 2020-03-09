"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = async (configFilePath) => {
    return new Promise((resolve, reject) => {
        return fs_1.readFile(configFilePath, (error, data) => {
            if (error) {
                throw reject(Error);
            }
            let configData;
            try {
                configData = JSON.parse(data.toString());
            }
            catch (error) {
                throw reject(new Error(error));
            }
            return resolve(configData);
        });
    });
};
//# sourceMappingURL=read-config-file.js.map