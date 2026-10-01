'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { emptyProgress, migrateLegacy, normalizeProgress, STORAGE_KEY } from '../lib/progress.js';
import { localized } from '../content/shared.js';
import { ui } from '../content/ui.js';
import { labUI } from '../content/lab-ui.js';
import { learningUI } from '../content/learning-ui.js';
const LearningContext=createContext(null);
export function LearningProvider({children}) {
  const [progress,setProgress]=useState(emptyProgress);
  const [hydrated,setHydrated]=useState(false);
  const [storageAvailable,setStorageAvailable]=useState(true);
  const current=useRef(emptyProgress());
  useEffect(()=>{
    const frame=requestAnimationFrame(()=>{
      try {
        const stored=localStorage.getItem(STORAGE_KEY);
        current.current=stored?normalizeProgress(JSON.parse(stored)):migrateLegacy(JSON.parse(localStorage.getItem('design-theory-progress-v1')));
      } catch { setStorageAvailable(false); }
      setProgress(current.current);setHydrated(true);
    });
    const sync=event=>{
      if(event.key!==STORAGE_KEY&&event.key!==null)return;
      try {current.current=normalizeProgress(JSON.parse(event.newValue));setProgress(current.current);}catch{/* Retain valid session state. */}
    };
    window.addEventListener('storage',sync);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('storage',sync);};
  },[]);
  useEffect(()=>{document.documentElement.lang=progress.language;},[progress.language]);
  const update=useCallback(transform=>{
    if(!hydrated)return;
    let latest=current.current;
    try {const stored=localStorage.getItem(STORAGE_KEY);if(stored)latest=normalizeProgress(JSON.parse(stored));}catch{/* Session remains usable. */}
    const next=normalizeProgress(transform(latest));
    current.current=next;setProgress(next);
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next));setStorageAvailable(true);}catch{setStorageAvailable(false);}
  },[hydrated]);
  const toggle=(key,slug)=>update(p=>({...p,[key]:p[key].includes(slug)?p[key].filter(value=>value!==slug):[...p[key],slug]}));
  const value={progress,hydrated,storageAvailable,language:progress.language,t:key=>localized(ui[key]??labUI[key]??learningUI[key],progress.language),l:value=>localized(value,progress.language),
    setLanguage:language=>update(p=>({...p,language})),toggleBookmark:slug=>toggle('bookmarks',slug),toggleComplete:slug=>toggle('completedTheory',slug)};
  value.completeActivity=id=>update(p=>({...p,completedActivities:[...p.completedActivities,id]}));
  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}
export const useLearning=()=>useContext(LearningContext);
