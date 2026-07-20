import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images', 'whatsapp');

try {
  fs.renameSync(path.join(dir, 'images (1).jpeg'), path.join(dir, 'ginger.jpeg'));
} catch (e) { console.log('Already renamed ginger'); }
try {
  fs.renameSync(path.join(dir, 'images (2).jpeg'), path.join(dir, 'peanut.jpeg'));
} catch (e) { console.log('Already renamed peanut'); }
try {
  fs.renameSync(path.join(dir, 'images (3).jpeg'), path.join(dir, 'cumin.jpeg'));
} catch (e) { console.log('Already renamed cumin'); }
console.log('Renamed files successfully.');
