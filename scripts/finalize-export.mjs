// Next 16.3's Windows export retains path separators in nested segment filenames.
// The router requests dot-separated names. Copy those files to their expected
// URL names on Windows; Linux/Vercel output is already correct and is unchanged.
import {readdir,copyFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=new URL('../out/',import.meta.url);let repaired=0;
async function visit(dir){for(const item of await readdir(dir,{withFileTypes:true})){const next=new URL(item.name+(item.isDirectory()?'/':''),dir);if(item.isDirectory()&&item.name.startsWith('__next.'))await flatten(next,dir,item.name);else if(item.isDirectory())await visit(next);}}
async function flatten(dir,parent,prefix){for(const item of await readdir(dir,{withFileTypes:true})){const next=new URL(item.name+(item.isDirectory()?'/':''),dir),name=`${prefix}.${item.name}`;if(item.isDirectory())await flatten(next,parent,name);else{const dest=path.join(fileURLToPath(parent),name);try{await access(dest);}catch{await copyFile(next,dest);repaired++;}}}}
await visit(root);console.log(`Static export ready: ${repaired} Windows segment filenames normalized.`);
