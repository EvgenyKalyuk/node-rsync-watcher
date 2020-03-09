export declare type ConfigObjectType = {
    source: string;
    targetDir: string;
    server: string;
    watchingDirs?: Array<string>;
    exclude?: Array<string>;
    include?: Array<string>;
};
export declare type ConfigArrayType = Array<{
    name: string;
} & ConfigObjectType>;
export declare type ConfigType = ConfigObjectType | ConfigArrayType;
