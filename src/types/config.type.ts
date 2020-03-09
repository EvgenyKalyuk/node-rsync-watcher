export type ConfigType = {
    name: string,
    source: string,
    targetDir: string,
    server: string,
    watchingDirs?: Array<string>,
    exclude?: Array<string>,
    include?: Array<string>
}
