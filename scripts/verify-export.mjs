import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {routes} from '../src/lib/routes.js';
import nextConfig from '../next.config.mjs';
const config=JSON.parse(await readFile(new URL('../vercel.json',import.meta.url),'utf8'));
assert.equal(config.framework,'nextjs');
assert.equal(nextConfig.output,'export');
// The Vercel Next.js adapter reads build manifests before collecting static out/.
// Pin the adapter directory explicitly so a stale dashboard setting cannot select out/.
assert.equal(config.outputDirectory,nextConfig.distDir||'.next','Vercel must read manifests from the Next.js build directory, not out');
const buildRoot=new URL(`../${config.outputDirectory}/`,import.meta.url);
const manifest=JSON.parse(await readFile(new URL('routes-manifest.json',buildRoot),'utf8'));
assert.ok(Array.isArray(manifest.staticRoutes)&&Array.isArray(manifest.dynamicRoutes),'Invalid Next.js routes manifest');
await access(new URL('prerender-manifest.json',buildRoot));
const root=new URL('../out/',import.meta.url);
let files=0;const references=new Set();
for(const route of ['',...routes]){
  const html=await readFile(new URL(route?`${route}/index.html`:'index.html',root),'utf8');
  assert.ok(html.includes('Design Theory City'),`Missing page content: ${route}`);
  assert.ok(!html.includes('Application error'),`Runtime error in export: ${route}`);
  assert.ok(!html.includes('href="/teacher/"'),`Removed teacher link in export: ${route}`);
  for(const [,title]of html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/g)){assert.ok(title.trim(),'Title must have server-rendered text');assert.ok(!title.includes('<!--'),`Fragmented title risks hydration mismatch: ${route}`);}
  for(const [,url]of html.matchAll(/(?:src|href)="(\/_next\/[^"?]+)(?:\?[^" ]*)?"/g))references.add(url.slice(1));
  files++;
}
for(const asset of references)await access(new URL(asset,root));
await assert.rejects(access(new URL('teacher/index.html',root)),{code:'ENOENT'});
const features={'':'hero-experiment','explore':'relationship-map','playground':'editor-canvas','theory/visual-hierarchy':'hierarchy-order','theory/color':'contrast-readout','theory/typography':'type-exercise','theory/focal-point':'rich-lab','theory/gestalt':'rich-lab'};
Object.assign(features,{'challenges':'visual-activity','challenges/design-detective':'detective-composition','reference':'reference-checklists'});
for(const route of routes)await access(new URL(`${route}/__next.$c$path.__PAGE__.txt`,root));
for(const [route,marker] of Object.entries(features)){const html=await readFile(new URL(route?`${route}/index.html`:'index.html',root),'utf8');assert.ok(html.includes(marker),`Missing learning surface ${marker} in ${route||'home'}`);}
console.log(`PASS: Vercel manifest ${config.outputDirectory}/routes-manifest.json, ${files} exported product pages and ${references.size} referenced framework assets. No runtime API required.`);
