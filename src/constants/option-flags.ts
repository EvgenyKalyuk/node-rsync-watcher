import { OptionFlagsType } from '../types/options.type';

export default {
    config: {
        flags: [
            '-c',
            '--config-file'
        ]
    },
    notifications: {
        flags: [
            '-n',
            '--notifications'
        ]
    },
    watch: {
        flags: [
            '-w',
            '--watch'
        ]
    }
} as OptionFlagsType;
