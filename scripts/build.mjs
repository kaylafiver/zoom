
import esbuild from 'esbuild';
import { sharedSettings } from './shared.mjs';
import fs from 'node:fs';

const OUTDIR = 'docs';
const result = await esbuild
  .build({
    minify: true,
    drop: ['console', 'debugger'],
    ...sharedSettings(OUTDIR),
    metafile: true,
  })
  .catch(() => process.exit(1));

fs.writeFileSync('meta.json', JSON.stringify(result.metafile));
console.log(await esbuild.analyzeMetafile(result.metafile, {
  verbose: true,
}));