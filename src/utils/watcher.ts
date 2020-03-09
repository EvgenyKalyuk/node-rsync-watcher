import chokidar from 'chokidar';
import debounce from 'lodash/debounce'; // eslint-disable-line

export default (filePaths: Array<string> | string, changeHandler: any) => {
    chokidar
        .watch(filePaths)
        .on('all', debounce(changeHandler, 1000));
}
