import * as babel from '@babel/core';
import plugin from './';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile),
  readFile = (file) => readFileAsync(file, { encoding: 'utf-8' }).then((value) => value.trim()),
  fixtures = path.join(__dirname, '../test/support/fixtures');

const transform = (code) =>
  babel.transform(code, { plugins: [plugin], configFile: false }).code.trim();

describe('plugin', () => {
  it('should transform imports everywhere', async () => {
    expect(transform(await readFile(`${fixtures}/import-everywhere.js`))).toMatchSnapshot();
  });

  it('should transform many import variants', async () => {
    expect(transform(await readFile(`${fixtures}/import-transform.js`))).toMatchSnapshot();
  });

  it('should not transform imports at the program scope', async () => {
    const code = await readFile(`${fixtures}/import-top.js`);
    expect(transform(code)).toBe(code);
  });

  it('should not support dangling imports', async () => {
    const code = await readFile(`${fixtures}/import-dangling-if.js`);
    expect(() => transform(code)).toThrow();
  });
});
