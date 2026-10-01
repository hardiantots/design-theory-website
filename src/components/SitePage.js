'use client';
import Link from 'next/link';
import {useLearning} from './LearningProvider';
import {Home,Explore} from './HomeAndExplore';
import {theories} from '../content/theories/index';
import {allTheories} from '../lib/search';
import TheoryLibrary from './TheoryLibrary';
import TheoryLesson from './TheoryLesson';
import dynamic from 'next/dynamic';
import {Reference,Glossary} from './ReferenceTools';
const Playground=dynamic(()=>import('./Playground'));
const Challenges=dynamic(()=>import('./Challenges'));
function Progress(){const {t,progress}=useLearning();const completed=theories.filter(item=>progress.completedTheory.includes(item.slug)).length;return <div className="progress-strip"><div><b>{t('progress')}</b><small>{t('storage')}</small></div><div><span>{completed} / 20 · {t('savedTopics')}</span><progress max="20" value={completed} aria-label={t('progress')}/></div><Link className="text-link" href="/theory/">{t('continue')} ↗</Link></div>;}
export default function SitePage({route}){const {t}=useLearning();if(route.startsWith('theory/')){const theory=allTheories.find(item=>item.slug===route.slice(7));return theory?<TheoryLesson key={theory.slug} theory={theory}/>:null;}if(route==='explore')return <Explore/>;if(route==='theory')return <><div className="page-intro"><p className="eyebrow">VISUAL LIBRARY / 20</p><h1>{t('atlas')}</h1><p>{t('guideNote')}</p></div><TheoryLibrary/><Progress/></>;if(route==='playground')return <Playground/>;if(route.startsWith('challenges'))return <Challenges detective={route==='challenges/design-detective'}/>;if(route==='reference')return <Reference/>;if(route==='glossary')return <Glossary/>;return <Home/>;}
