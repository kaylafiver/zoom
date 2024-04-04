
import esbuild from 'esbuild';
import { sharedSettings } from './shared.mjs';

// import http from 'node:http';

const OUTDIR = 'dev';
let ctx = await esbuild.context({
    sourcemap: true,
    banner: { js: ' (() => new EventSource("/esbuild").addEventListener("change", () => location.reload()))();' },
    // banner: { js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();' },
    // define: { ___DEV: 'true' },
    // inject: [path.resolve(__dirname, '..', 'scripts/livereload.js')],
    ...sharedSettings(OUTDIR),
  }).catch(() => process.exit(1));

await ctx.watch();

const { host, port } = await ctx.serve({
  host: '0.0.0.0',
  port: 5173,
  servedir: OUTDIR,
});
// const { host, port } = await ctx.serve({
//   servedir: OUTDIR,
// });

console.log(`Serving app at ${host}:${port}.`);

// https://esbuild.github.io/api/#serve-proxy
// https://github.com/evanw/esbuild/issues/802#issuecomment-819578182
// http.createServer((req, res) => {
//   console.log(req.url);
//   // if (req.url === '/esbuild') {
//   //   res.writeHead(200, {
//   //     'Content-Type': 'text/event-stream',
//   //     'Cache-Control': 'no-cache',
//   //     Connection: 'keep-alive',
//   //   });
//   //   return
//   // }

//   const options = {
//     hostname: host,
//     port: port,
//     // path: req.url,
//     path: ~req.url.split('/').pop().indexOf('.') || req.url === '/esbuild' ? req.url : `/index.html`,
//     method: req.method,
//     headers: req.headers,
//   }

//   // Forward each incoming request to esbuild
//   const proxyReq = http.request(options, proxyRes => {
//     // If esbuild returns "not found", send a custom 404 page
//     if (proxyRes.statusCode === 404) {
//       res.writeHead(404, { 'Content-Type': 'text/html' })
//       res.end('<h1>A custom 404 page</h1>')
//       return
//     }

//     // Otherwise, forward the response from esbuild to the client
//     res.writeHead(proxyRes.statusCode, proxyRes.headers)
//     proxyRes.pipe(res, { end: true })
//   })

//   // Forward the body of the request to esbuild
//   req.pipe(proxyReq, { end: true })
// }).listen(5173);

// console.log(`Proxy at ${host}:5173`);