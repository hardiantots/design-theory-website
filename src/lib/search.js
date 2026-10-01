import { theories } from '../content/theories/index.js';
import { gestaltTopics } from '../content/theories/gestalt.js';
import { categories } from '../content/shared.js';
export const allTheories=[...theories,...gestaltTopics];
const normalized = value=>value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 -]/g,' ');
const crowdedTopics=new Set(['white-space','information-density','visual-hierarchy','alignment','gestalt/proximity']);
const index=allTheories.map(item=>({item,text:normalized([item.title.id,item.title.en,item.shortDefinition.id,item.shortDefinition.en,...item.aliases,...item.keywords,...item.related,...Object.values(categories.find(cat=>cat.id===item.category).title),crowdedTopics.has(item.slug)?'crowded ramai padat sesak':''].join(' '))}));
const stop=new Set(['my','the','a','is','looks','design','desain','terlihat','saya','yang','dan','and','of','in','di']);
export function searchTheories(query) {
  const terms=normalized(query).trim().split(/\s+/).filter(word=>word&&!stop.has(word));
  if(!terms.length) return query.trim()?[]:allTheories;
  return index.map(({item,text})=>({item,score:terms.reduce((sum,term)=>sum+(text.includes(term)?1:0),0)})).filter(hit=>hit.score>0).sort((a,b)=>b.score-a.score).map(hit=>hit.item);
}
