import notifier from 'node-notifier';
import path from 'path';

import { NotifyPropsType } from '../../types/notify-props.type';

export default (notifyProps: NotifyPropsType) => {
    notifier.notify(
        {
            ...notifyProps,
            title: 'rsync watcher',
            sound: false,
            wait: false,
            icon: path.join(__dirname, '..', '..', 'assets', 'rsync.png')
        }
    );
}
