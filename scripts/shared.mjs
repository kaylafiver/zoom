import path from 'path';
import { fileURLToPath } from 'url';
import esbuildPluginTsc from 'esbuild-plugin-tsc';
import stylexPlugin from '@stylexjs/esbuild-plugin';

export function sharedSettings(OUTDIR) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const STYLEX_BUNDLE_PATH = path.resolve(__dirname, '..', `${OUTDIR}/stylex.css`,);
  return {
    entryPoints: [
      { out: 'index', in: path.resolve(__dirname, '..', 'public/index.html') },
      { out: 'bundle', in: path.resolve(__dirname, '..', 'src/App.jsx') },
      // { out: 'theme', in: path.resolve(__dirname, '..', 'public/theme.html') },
      // { out: 'bundle-theme', in: path.resolve(__dirname, '..', 'src/Theme.jsx') },
      'public/android-chrome-192x192.png',
      'public/android-chrome-512x512.png',
      'public/apple-touch-icon.png',
      'public/favicon-16x16.png',
      'public/favicon-32x32.png',
      'public/favicon.ico',
      'public/site.webmanifest'
    ],
    bundle: true,
    outdir: OUTDIR,
    loader: {
      ".html": "copy",
      ".png": "copy",
      ".ico": "copy",
      ".webmanifest": "copy",
    },
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment',

    plugins: [
      esbuildPluginTsc({
        // If true, force compilation with tsc
        force: true,
        // If true, enables tsx file support
        tsx: true
      }),
      // See all options in the babel plugin configuration docs:
      // https://stylexjs.com/docs/api/configuration/babel-plugin/
      stylexPlugin({
        dev: false,
        useCSSLayers: true,
        generatedCSSFileName: STYLEX_BUNDLE_PATH,
        stylexImports: ['@stylexjs/stylex'],
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: path.resolve(__dirname, '../'),
        },
      }),
    ],
  };
}