import Commander from 'commander';

// import readConfigFile from '../utils/read-config-file';

export default (program: typeof Commander, configFilePath: string): void => {
    console.log(configFilePath);
    console.log(program.config);

}
