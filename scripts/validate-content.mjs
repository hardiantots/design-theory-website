import assert from 'node:assert/strict';
import {theories} from '../src/content/theories/index.js';
import {gestaltTopics} from '../src/content/theories/gestalt.js';
import {glossary} from '../src/content/glossary.js';
import {ui} from '../src/content/ui.js';
import {categories,localized} from '../src/content/shared.js';
import {routes,pageRoutes} from '../src/lib/routes.js';
import {allTheories,searchTheories} from '../src/lib/search.js';
import {normalizeProgress,migrateLegacy} from '../src/lib/progress.js';
const bilingual=(value,label)=>{assert.equal(typeof value?.id,'string',`${label}: Indonesian missing`);assert.equal(typeof value?.en,'string',`${label}: English missing`);assert.ok(value.id.trim().length&&value.en.trim().length,`${label}: empty translation`);};
assert.equal(theories.length,20);assert.equal(gestaltTopics.length,8);assert.equal(categories.length,6);
assert.equal(new Set(allTheories.map(item=>item.slug)).size,28);
for(const theory of allTheories){
  for(const field of ['title','shortDefinition','explanation','whyItMatters','deepDive','control','weak','strong','tryItYourself','keyTakeaway'])bilingual(theory[field],`${theory.slug}/${field}`);
  for(const field of ['commonMistakes','reflectionQuestions']){assert.ok(theory[field].length);theory[field].forEach(value=>bilingual(value,`${theory.slug}/${field}`));}
  assert.ok(theory.keywords.length);assert.ok(theory.aliases.length);assert.ok(theory.examples.length);assert.ok(theory.source.url.startsWith('https://'));assert.ok(categories.some(category=>category.id===theory.category));
  for(const slug of theory.related)assert.ok(allTheories.some(item=>item.slug===slug),`Broken relation ${theory.slug} -> ${slug}`);
  assert.ok(routes.includes(`theory/${theory.slug}`));
}
Object.entries(ui).forEach(([key,value])=>bilingual(value,`ui/${key}`));
glossary.forEach(item=>{bilingual(item.definition,item.term);assert.ok(theories.some(theory=>theory.slug===item.related));});
assert.equal(new Set(routes).size,routes.length);assert.equal(pageRoutes.length,7);
const corrupted=normalizeProgress({language:'xx',completedTheory:'gestalt',bookmarks:[1,'bogus','color','color'],challengeAnswers:{hierarchy:99,grouping:'1',focus:2},completedChallenges:['fake']});
assert.equal(corrupted.language,'id');assert.deepEqual(corrupted.completedTheory,[]);assert.deepEqual(corrupted.bookmarks,['color']);assert.deepEqual(corrupted.completedChallenges,['focus']);
for(const input of [null,false,42,'broken',[]])assert.equal(normalizeProgress(input).language,'id');
const english=normalizeProgress({language:'en',bookmarks:['gestalt/proximity'],completedTheory:['color'],challengeAnswers:{hierarchy:0}});
assert.equal(english.language,'en');assert.deepEqual(normalizeProgress(JSON.parse(JSON.stringify(english))),english);
const legacyIds=['hierarchy','grouping','focus','space','balance'];
for(const answer of [0,1,2]){
  const saved=normalizeProgress({challengeAnswers:Object.fromEntries([...legacyIds,'unknown'].map(id=>[id,answer]))});
  assert.deepEqual(saved.completedChallenges,legacyIds);
  assert.deepEqual(saved.challengeAnswers,Object.fromEntries(legacyIds.map(id=>[id,answer])));
}
for(const answer of [-1,3,0.5,'1',null,true])assert.deepEqual(normalizeProgress({challengeAnswers:{hierarchy:answer}}).challengeAnswers,{});
assert.equal(localized(ui.search,'en'),'Search theories');assert.equal(localized(ui.search,'id'),'Cari teori');
const migrated=migrateLegacy({answers:{gestalt:[0,1,2],hierarchy:[0,null,2],color:[0,1,1]}});
assert.deepEqual(migrated.completedTheory,['gestalt','color']);
for(const query of ['my design looks crowded','desain terlihat ramai','padat']){const hits=searchTheories(query).map(item=>item.slug);assert.ok(hits.includes('white-space'),query);assert.ok(hits.includes('information-density'),query);}
assert.ok(searchTheories('closure').some(item=>item.slug==='gestalt/closure'));
assert.ok(searchTheories('leading').some(item=>item.slug==='typography'));
assert.equal(searchTheories('zzzznonexistent').length,0);
console.log(`PASS: 20 theories + 8 Gestalt lessons, ${Object.keys(ui).length} bilingual UI labels, ${glossary.length} glossary terms, 5 legacy challenge records, ${routes.length+1} routes, relationships, search, corrupted storage and legacy migration.`);
