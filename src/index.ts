#!/usr/bin/env node

import commander from 'commander';

import rsyncWatcherScript from './scripts/rsync-wather';

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
        .version(version)
        .option('-c <path>, --config <path>', 'config file path (default: current path)', process.cwd())
        .action(rsyncWatcherScript)
        .parse(process.argv);
}

init();

