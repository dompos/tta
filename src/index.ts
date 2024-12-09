import * as fs from 'fs';
const txtFilePath: string = './src/YOUR_INPUT_FILE_NAME.txt';
const tsFileName: string = './dist/YOUR_OUTPUT_FILE_NAME.ts';
const nameArray: string = 'YOUR_ARRAY_NAME';

const data: string = fs.readFileSync(txtFilePath, 'utf-8');
const arrData: string[] = data.split('\r\n');
fs.writeFileSync(tsFileName, `export const ${nameArray}: string[] =  ${JSON.stringify(arrData)}`);
