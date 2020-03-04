import { readFile } from 'fs';
import path from 'path';

import { IPackageFile } from '../types/package-file.type';

const packageJsonFilePath = path.resolve(__dirname, '..', '..', 'package.json');

export default async (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
       return readFile(packageJsonFilePath, (error: Error | null, data: Buffer | string) => {
           if (error) {
               throw reject(Error);
           }

           let packageData: IPackageFile = {};

           try {
               packageData = JSON.parse(data.toString())
           } catch (error) {
               throw reject(new Error(error))
           }

           return resolve(packageData.version as string);
       })
    });
}
