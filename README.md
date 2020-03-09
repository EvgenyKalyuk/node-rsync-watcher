#NODEJS RSYNC WATCHER

Nodejs cli for run rsync on change files

##Config file

Object or array of objects

```
{
    name: string,
    source: string,
    targetDir: string,
    server: string,
    watchingDirs?: Array<string>,
    exclude?: Array<string>,
    include?: Array<string>
}
```
