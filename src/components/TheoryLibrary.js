'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '../content/shared.js';
import { theories } from '../content/theories/index.js';
import { useLearning } from './LearningProvider';
import { Diagram } from './VisualExperiment';
import { searchTheories } from '../lib/search';
export function TheoryCard({theory,index=0}) {
  const {l,t,progress}=useLearning();
  return <Link href={`/theory/${theory.slug}/`} className="theory-card" style={{'--theory-accent':theory.color}}><div className="card-top"><span>{String(index+1).padStart(2,'0')} /</span><span>{l(categories.find(cat=>cat.id===theory.category).title)}</span></div><Diagram theory={theory} value={75}/><div className="card-title"><h3>{l(theory.title)}</h3><span aria-hidden="true">↗</span></div><p>{l(theory.shortDefinition)}</p><span className="card-state">{progress.completedTheory.includes(theory.slug)?`✓ ${t('completed')}`:t('openLesson')}{progress.bookmarks.includes(theory.slug)?' · ★':''}</span></Link>;
}
export default function TheoryLibrary({initialCategory='all'}) {
  const {t,l,progress}=useLearning();const [category,setCategory]=useState(initialCategory),[query,setQuery]=useState(''),[saved,setSaved]=useState(false);
  const searched=query.trim()?searchTheories(query).filter(item=>!item.slug.includes('/')):theories;
  const shown=searched.filter(item=>(category==='all'||item.category===category)&&(!saved||progress.bookmarks.includes(item.slug)));
  return <><div className="library-toolbar"><label className="library-search"><span className="sr-only">{t('search')}</span><input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder={t('searchPlaceholder')}/></label><button className="outline-button" aria-pressed={saved} onClick={()=>setSaved(!saved)}>★ {t('bookmarks')}</button></div><div className="category-tabs" role="group" aria-label={t('theory')}>{[{id:'all',title:{id:t('all'),en:t('all')}},...categories].map(item=><button key={item.id} aria-pressed={category===item.id} onClick={()=>setCategory(item.id)}>{l(item.title)}{item.id!=='all'&&<span>{theories.filter(theory=>theory.category===item.id).length}</span>}</button>)}</div><p className="result-count" aria-live="polite">{shown.length} {t('topics')}</p><div className="theory-grid">{shown.map(item=><TheoryCard key={item.slug} theory={item} index={theories.indexOf(item)}/>)}</div>{!shown.length&&<div className="empty-state">{saved?t('noBookmarks'):t('noResults')}</div>}</>;
}
