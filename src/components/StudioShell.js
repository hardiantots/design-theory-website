'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLearning } from './LearningProvider';
import { searchTheories } from '../lib/search.js';
import { categories } from '../content/shared.js';
import Icon from './InterfaceIcon';
function SearchDialog({onClose}) {
  const {t,l}=useLearning();const ref=useRef();const [query,setQuery]=useState('');
  const results=searchTheories(query);
  useEffect(()=>{const previous=document.activeElement;const element=ref.current;element.showModal();return()=>{element.close();previous?.focus?.({preventScroll:true});};},[]);
  return <dialog ref={ref} className="search-dialog" aria-labelledby="search-title" onCancel={event=>{event.preventDefault();onClose();}}><header><h2 id="search-title">{t('search')}</h2><button onClick={onClose} aria-label={t('close')}>×</button></header><label className="sr-only" htmlFor="global-search">{t('search')}</label><input id="global-search" autoFocus type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder={t('searchPlaceholder')}/><p className="muted">{t('searchHint')} · <span aria-live="polite">{results.length} {t('searchCount')}</span></p><div className="search-results">{results.map(item=><Link onClick={onClose} href={`/theory/${item.slug}/`} key={item.slug}><span><b>{l(item.title)}</b><small>{l(item.shortDefinition)}</small></span><span>{l(categories.find(cat=>cat.id===item.category).title)} ↗</span></Link>)}{!results.length&&<p>{t('noResults')}</p>}</div></dialog>;
}
export default function StudioShell({children}) {
  const {t,language,setLanguage,hydrated,storageAvailable}=useLearning();
  const [search,setSearch]=useState(false),[menu,setMenu]=useState(false);
  const pathname=usePathname();
  const navigation=[['explore','/explore/'],['theory','/theory/'],['playground','/playground/'],['challenges','/challenges/'],['reference','/reference/']];
  return <><a className="skip-link" href="#main-content">{language==='id'?'Langsung ke konten':'Skip to content'}</a><header className="site-header"><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true"><Icon name="city" size={28}/></span><span>Design Theory <b>City</b><small>{t('tagline')}</small></span></Link><nav className={`desktop-nav ${menu?'nav-open':''}`} aria-label={t('menu')}>{navigation.map(([name,href])=><Link key={name} href={href} onClick={()=>setMenu(false)} aria-current={pathname?.startsWith(href)?'page':undefined}>{t(name)}</Link>)}<Link className="mobile-extra" href="/glossary/" onClick={()=>setMenu(false)}>{t('glossary')}</Link></nav><div className="header-controls"><button className="search-trigger" onClick={()=>setSearch(true)}><span aria-hidden="true">⌕</span><span className="search-label">{t('search')}</span></button><div className="language-switch" role="group" aria-label={t('language')}>{['id','en'].map(code=><button disabled={!hydrated} key={code} aria-pressed={language===code} onClick={()=>setLanguage(code)} aria-label={code==='id'?'Bahasa Indonesia':'English'}>{code.toUpperCase()}</button>)}</div><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav" aria-label={t('menu')}>☰</button></div></header><div id="mobile-nav" hidden={!menu} className="mobile-menu">{navigation.map(([name,href])=><Link key={name} href={href} onClick={()=>setMenu(false)}>{t(name)}</Link>)}<Link href="/glossary/" onClick={()=>setMenu(false)}>{t('glossary')}</Link></div>{!storageAvailable&&<p className="storage-notice" role="status">{t('storageError')}</p>}<main id="main-content" className="page-container">{children}</main><footer className="site-footer"><Link href="/">Design Theory City</Link><span>{t('footer')}</span><div><Link href="/glossary/">{t('glossary')}</Link><span>VOL. 02</span></div></footer>{search&&<SearchDialog onClose={()=>setSearch(false)}/>}</>;
}
