import { readFile } from 'fs'

import { ConfigType } from '../types/config.type';

export default async (configFilePath: string): Promise<ConfigType> => {
    return new Promise<ConfigType>((resolve, reject) => {
        return readFile(configFilePath, (error: Error | null, data: Buffer | string) => {
            if (error) {
                throw reject(Error);
            }

            let configData: ConfigType;

            try {
                configData = JSON.parse(data.toString())
            } catch (error) {
                throw reject(new Error(error))
            }

            return resolve(configData);
        })
    })
}
