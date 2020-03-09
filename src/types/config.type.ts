export type ConfigObjectType = {
    source: string,
    targetDir: string,
    server: string,
    watchingDirs?: Array<string>,
    exclude?: Array<string>,
    include?: Array<string>
}

export type ConfigArrayType = Array<{
    name: string;
} & ConfigObjectType>;

export type ConfigType =
    | ConfigObjectType
    | ConfigArrayType;
