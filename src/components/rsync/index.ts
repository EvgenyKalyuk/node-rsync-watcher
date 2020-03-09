import { exec } from 'child_process';

import notificationSystem from '../notification-system';

import logger from '../../utils/logger';

import { ConfigType } from '../../types/config.type';

export default (config: ConfigType): void => {
    let command = 'rsync -r -a -z';

    if (config.include && config.include.length) {
        config.include.forEach(item => {
            command += ` --exclude ${item}`;
        });
    }

    if (config.exclude && config.exclude.length) {
        config.exclude.forEach(item => {
            command += ` --exclude ${item}`;
        });
    }

    command += ` ${config.source} ${config.server}:${config.targetDir}`;


    exec(command, (error, stdout, stderror) => {
        if (error || stderror) {
            console.error(error);

            return logger.error('failed');
        }

        notificationSystem({
            message: 'Successfully synchronized'
        });

        return logger.info('success');
    });
}
