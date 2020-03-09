import watcher from './utils/watcher';
import readConfigFile from './utils/read-config-file';
import getOptions from './utils/get-options';

import rsyncComponent from './components/rsync';
import rsyncConfigComponent from './components/config';

(async () => {
    const options = getOptions();
    const config = await rsyncConfigComponent.readConfigFile(options.config);

    if (Array.isArray(config)) {
        config.forEach((configItem) => {
            watcher(configItem.watchingDirs || configItem.source, () => {
                rsyncComponent(configItem);
            });
        });
    } else {
        watcher(config.watchingDirs || config.source, () => {
            rsyncComponent(config);
        })
    }
})();

process.on('unhandledRejection', (error) => {
    console.error('unhandledRejection received.', error);
});
