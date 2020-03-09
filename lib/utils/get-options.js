"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const option_flags_1 = __importDefault(require("../constants/option-flags"));
exports.default = () => {
    const options = {
        config: ''
    };
    for (let [optionName, { flags }] of Object.entries(option_flags_1.default)) {
        const optionFlag = flags.find(flag => process.argv.includes(flag));
        if (!optionFlag) {
            continue;
        }
        const optionIndex = process.argv.indexOf(optionFlag);
        const optionValue = process.argv[optionIndex + 1];
        if (!optionValue || optionValue.startsWith('-')) {
            continue;
        }
        // @ts-ignore
        options[optionName] = optionValue;
    }
    if (!options.config) {
        return process.exit(1);
    }
    return options;
};
//# sourceMappingURL=get-options.js.map