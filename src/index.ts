#!/usr/bin/env node

import commander from 'commander';

// import rsyncWatcherScript from './scripts/rsync-wather';

import getPackageVersion from './utils/get-package-version';

async function init() {
    let version: string = '';

    try {
        version = await getPackageVersion();
    } catch (error) {
        throw error;
    }

    console.log(version);

    commander
        .passCommandToAction(false)
        .version(version)
        .name('node-rsync-watcher')
        .requiredOption('-c <filePath>, --config <filePath>', 'config file path')
        .parse(process.argv);

    console.log(commander.config);
}

init();

