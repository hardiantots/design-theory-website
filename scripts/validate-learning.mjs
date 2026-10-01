import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {activities,detectiveClues,learningUI} from '../src/content/learning-ui.js';
import {referenceCards} from '../src/content/reference.js';
import {glossary} from '../src/content/glossary.js';
import {allTheories} from '../src/lib/search.js';
import {normalizeProgress} from '../src/lib/progress.js';
import {initialOrder,movePriority,alignmentPosition,consistentAlignment} from '../src/lib/activities.js';
import {ui} from '../src/content/ui.js';
import {labUI} from '../src/content/lab-ui.js';
const bilingual=(v,name)=>{assert.ok(v?.id?.trim(),`${name}: ID missing`);assert.ok(v?.en?.trim(),`${name}: EN missing`);};
Object.entries(learningUI).forEach(([key,v])=>bilingual(v,key));assert.equal(activities.length,6);assert.equal(new Set(activities.map(item=>item.id)).size,6);
for(const item of activities){for(const key of ['title','prompt','explanation'])bilingual(item[key],`${item.id}/${key}`);assert.ok(allTheories.some(t=>t.slug===item.theory));}
for(const clue of detectiveClues){bilingual(clue.label,clue.id);bilingual(clue.explanation,clue.id);}assert.equal(detectiveClues.length,6);
assert.equal(referenceCards.reduce((n,card)=>n+card.checks.length,0),17);for(const card of referenceCards){bilingual(card.title,card.id);card.checks.forEach(v=>bilingual(v,card.id));assert.ok(allTheories.some(t=>t.slug===card.theory));}
const required='Alignment,Balance,Baseline,Closure,Contrast,Focal Point,Gestalt,Grid,Hierarchy,Hue,Kerning,Leading,Negative space,Proportion,Proximity,Rhythm,Saturation,Scale,Similarity,Tracking,Visual Weight,White Space'.split(',');for(const term of required)assert.ok(glossary.some(item=>item.term===term),term);glossary.forEach(item=>bilingual(item.label,item.term));
const old=normalizeProgress({language:'en',bookmarks:['color'],completedTheory:['gestalt'],challengeAnswers:{hierarchy:0}});assert.equal(old.language,'en');assert.deepEqual(old.bookmarks,['color']);assert.deepEqual(old.completedActivities,[]);
assert.deepEqual(normalizeProgress({...old,completedActivities:['bad','observe-focus','observe-focus',1]}).completedActivities,['observe-focus']);assert.deepEqual(normalizeProgress({...old,completedActivities:{}}).completedActivities,[]);
assert.equal(movePriority(initialOrder,'event',-1),initialOrder);assert.deepEqual(movePriority(initialOrder,'date',-1),['date','event','location','description','cta']);assert.equal(movePriority(initialOrder,'bad',1),initialOrder);assert.equal(alignmentPosition('center',200),120);assert.equal(alignmentPosition('right',200),204);assert.ok(consistentAlignment(['right','right','right']));assert.ok(!consistentAlignment(['left','center']));
for(const file of ['Challenges.js','VisualActivity.js','ReferenceTools.js']){const source=await readFile(new URL(`../src/components/${file}`,import.meta.url),'utf8');for(const [,key]of source.matchAll(/\bt\(['"]([\w]+)['"]\)/g))assert.ok(ui[key]||labUI[key]||learningUI[key],`Missing label ${key} in ${file}`);}
console.log(`PASS: 6 visual activities, 6 detective observations, 17 reference checks, all 22 required glossary terms, translations, legacy progress and activity recovery.`);
