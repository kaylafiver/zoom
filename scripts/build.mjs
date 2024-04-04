
import esbuild from 'esbuild';
import { sharedSettings } from './shared.mjs';

const OUTDIR = 'docs';
esbuild
  .build({
    minify: true,
    drop: ['console', 'debugger'],
    ...sharedSettings(OUTDIR),
  })
  .catch(() => process.exit(1));
