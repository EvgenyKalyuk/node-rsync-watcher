import OPTION_FLAGS from '../constants/option-flags';

import { OptionsType } from '../types/options.type';

export default (): OptionsType => {
    const options: OptionsType = {
        config: ''
    };

    for (let [optionName, { flags }] of Object.entries(OPTION_FLAGS)) {
        const optionFlag: string | void = flags.find(flag => process.argv.includes(flag));

        if (!optionFlag) {
            continue;
        }

        const optionIndex: number = process.argv.indexOf(optionFlag);
        const optionValue: string | void = process.argv[optionIndex + 1];

        if (!optionValue || optionValue.startsWith('-')) {
            continue;
        }

        // @ts-ignore
        options[optionName] = optionValue;
    }

    if (!options.config) {
        throw new Error('please set config file path');
    }

    return options;
}
