import fs from 'fs';
import { map, pick } from 'lodash';

export function sanitizeData(content) {
  return map(content, (c) => (pick(c, [
    'id',
    'active',
    'directory',
    'domain',
  ])));
}

export function readJSONFile(file) {
  return sanitizeData(JSON.parse(fs.readFileSync(file, 'w').toString()));
}

export function writeJSONFile(file, content) {
  return fs.writeFile(file, JSON.stringify(sanitizeData(content)));
}