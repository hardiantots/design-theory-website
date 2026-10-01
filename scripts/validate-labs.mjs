import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {ui} from '../src/content/ui.js';
import {labUI,typographyConcepts} from '../src/content/lab-ui.js';
import {hslToHex,contrastRatio,harmonyColors,buildPalette} from '../src/lib/color.js';
import {weakHierarchy,strongHierarchy,interpolateHierarchy,simulatedOrder} from '../src/lib/hierarchy.js';
import {defaultGuides,normalizeGuides,initialCanvas,makeObject,sanitizeCanvas,readCanvas,commitHistory,undoHistory,redoHistory,analyzeCanvas} from '../src/lib/playground.js';
for(const [key,value] of Object.entries(labUI)){assert.ok(value.id?.trim(),key);assert.ok(value.en?.trim(),key);}
for(const tuple of typographyConcepts)for(const value of tuple){assert.ok(value.id);assert.ok(value.en);}
const components=['Playground.js','HomeAndExplore.js',...(await readdir(new URL('../src/components/labs/',import.meta.url))).map(file=>`labs/${file}`)];
for(const file of components){const source=await readFile(new URL(`../src/components/${file}`,import.meta.url),'utf8');for(const [,key] of source.matchAll(/\bt\(['"]([\w]+)['"]\)/g))assert.ok(ui[key]||labUI[key],`Missing translated label ${key} in ${file}`);}
assert.equal(hslToHex(0,100,50),'#ff0000');assert.equal(hslToHex(120,100,50),'#00ff00');assert.equal(hslToHex(240,100,50),'#0000ff');assert.equal(hslToHex(360,100,50),'#ff0000');
assert.equal(contrastRatio('#000000','#ffffff'),21);assert.equal(contrastRatio('#123456','#123456'),1);assert.ok(Math.abs(contrastRatio('#777777','#ffffff')-4.478)<.001);
assert.deepEqual(harmonyColors(0,100,50,'complementary'),['#ff0000','#00ffff']);assert.equal(harmonyColors(0,100,50,'triadic').length,3);assert.equal(harmonyColors(0,100,50,'tetradic').length,4);assert.equal(new Set(harmonyColors(0,100,50,'mono')).size,4);
assert.ok(contrastRatio(buildPalette(30,65,55,'triadic').text,buildPalette(30,65,55,'triadic').background)>4.5);
assert.deepEqual(interpolateHierarchy(0),weakHierarchy);assert.deepEqual(interpolateHierarchy(100),strongHierarchy);assert.equal(new Set(simulatedOrder(strongHierarchy).map(item=>item.role)).size,5);
const initial=initialCanvas();assert.deepEqual(readCanvas('invalid json'),initial);assert.deepEqual(readCanvas('{"version":2}'),initial);assert.deepEqual(sanitizeCanvas(null),initial);
assert.deepEqual(normalizeGuides(null),defaultGuides);assert.equal(normalizeGuides({columns:'200',thirds:'yes'}).columns,'none');assert.equal(normalizeGuides({columns:'12',thirds:true}).thirds,true);
const malformed=sanitizeCanvas({version:1,objects:[{...makeObject('text','a'),x:-100,y:999,fontSize:1000,fill:'url(x)',text:{id:'x',en:'y'}},{...makeObject('text','a')},{id:'b',type:'script'},null]});assert.equal(malformed.objects.length,1);assert.equal(malformed.objects[0].x,0);assert.equal(malformed.objects[0].y,540);assert.equal(malformed.objects[0].fontSize,100);assert.equal(malformed.objects[0].fill,'#202820');
assert.equal(sanitizeCanvas({version:1,objects:Array.from({length:50},(_,i)=>makeObject('circle',String(i)))}).objects.length,30);
let history={past:[],present:initial,future:[]};const next={...initial,objects:initial.objects.slice(1)};history=commitHistory(history,next);assert.deepEqual(undoHistory(history).present,initial);assert.deepEqual(redoHistory(undoHistory(history)).present,next);assert.equal(commitHistory(history,next),history);assert.equal(commitHistory(undoHistory(history),{...initial,objects:[]}).future.length,0);
for(let i=0;i<50;i++)history=commitHistory(history,{version:1,objects:[{...makeObject('text','a'),x:i}]});assert.equal(history.past.length,40);
const testCanvas={version:1,objects:[makeObject('text','a'),{...makeObject('text','b'),y:160},{...makeObject('button','c'),fill:'#ffffff',textColor:'#eeeeee'}]};assert.ok(analyzeCanvas(testCanvas).includes('obsHierarchy'));assert.ok(analyzeCanvas(testCanvas).includes('obsCTA'));assert.deepEqual(analyzeCanvas({version:1,objects:[]}),['obsClear']);assert.deepEqual(analyzeCanvas(initial),analyzeCanvas(initial));
console.log(`PASS: ${Object.keys(labUI).length} bilingual lab labels, color conversions, WCAG contrast ratios, six harmonies, hierarchy endpoints, corrupt canvas recovery, object cap, undo/redo branching and cap, deterministic observations.`);
