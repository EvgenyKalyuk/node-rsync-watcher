export type OptionsType = {
    config: string,
    notifications?: boolean,
    watch?: boolean
}

export type OptionFlagsType = {
    config: {
        flags: Array<string>
    },
    notifications: {
        flags: Array<string>
    },
    watch: {
        flags: Array<string>
    }
}
