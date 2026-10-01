import { theories } from '../content/theories/index.js';
import { gestaltTopics } from '../content/theories/gestalt.js';
import { activities } from '../content/learning-ui.js';
// Only IDs and the three-choice limit are needed to retain old saved quiz answers.
const legacyChallengeIds = ['hierarchy','grouping','focus','space','balance'];
export const STORAGE_KEY = 'design-theory-city:learning-progress:v2';
export const allSlugs = [...theories,...gestaltTopics].map(item=>item.slug);
export const emptyProgress = () => ({language:'id',completedTheory:[],completedChallenges:[],completedActivities:[],bookmarks:[],challengeAnswers:{}});
export function normalizeProgress(raw) {
  const clean = emptyProgress();
  if (!raw || typeof raw!=='object') return clean;
  clean.language=raw.language==='en'?'en':'id';
  clean.completedActivities=Array.isArray(raw.completedActivities)?activities.filter(item=>raw.completedActivities.includes(item.id)).map(item=>item.id):[];
  for(const key of ['completedTheory','bookmarks']) clean[key]=Array.isArray(raw[key])?allSlugs.filter(slug=>raw[key].includes(slug)):[];
  for(const id of legacyChallengeIds) {
    const answer=raw.challengeAnswers?.[id];
    if(Number.isInteger(answer)&&answer>=0&&answer<3) clean.challengeAnswers[id]=answer;
  }
  clean.completedChallenges=legacyChallengeIds.filter(id=>Number.isInteger(clean.challengeAnswers[id]));
  return clean;
}
export function migrateLegacy(raw) {
  const mapping={gestalt:'gestalt',color:'color',hierarchy:'visual-hierarchy',focus:'focal-point',typography:'typography',layout:'grid',space:'white-space',balance:'balance'};
  const state=emptyProgress();
  if(raw&&typeof raw==='object') for(const [key,slug] of Object.entries(mapping)) if(Array.isArray(raw.answers?.[key])&&raw.answers[key].length===3&&raw.answers[key].every(answer=>Number.isInteger(answer)&&answer>=0&&answer<3)) state.completedTheory.push(slug);
  return state;
}
