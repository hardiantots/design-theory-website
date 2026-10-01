'use client';
import {useState} from 'react';
import Link from 'next/link';
import {useLearning} from './LearningProvider';
import {activities} from '../content/learning-ui';
import VisualActivity from './VisualActivity';
export default function Challenges({detective=false}){const {t,l,progress}=useLearning();const [selected,setSelected]=useState('observe-focus');const activity=activities.find(item=>item.id===(detective?'design-detective-v1':selected));return <><div className="page-intro"><p className="eyebrow">{t('activity')}</p><h1>{t(detective?'detective':'visualActivities')}</h1><p>{t(detective?'detectiveIntro':'activityIntro')}</p></div>{!detective&&<nav className="activity-tabs" aria-label={t('visualActivities')}>{activities.map(item=><button key={item.id} aria-pressed={selected===item.id} onClick={()=>setSelected(item.id)}>{l(item.title)} {progress.completedActivities.includes(item.id)?'✓':''}</button>)}</nav>}<VisualActivity key={activity.id} activity={activity}/><div className="challenge-progress" role="status">{progress.completedActivities.length} / {activities.length} · {t('activityDone')}<p className="caption">{t('localActivityProgress')}</p></div><Link className="text-link" href={`/theory/${activity.theory}/`}>{t('openLesson')} ↗</Link></>;}
