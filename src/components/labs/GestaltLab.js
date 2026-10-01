'use client';
import {useId,useState} from 'react';
import {useLearning} from '../LearningProvider';
import {gestaltTopics} from '../../content/theories/gestalt';
import {Choice,ColorInput,LabFrame,Range,Toggle} from './Controls';
const defaults={x:45,y:42,similar:'color',complete:72,curve:60,position:0,contrast:85,brightness:40,blur:0,fg:'#e4e6da',bg:'#343c36',containers:true,connections:true,playing:false};
const rows=Array.from({length:18},(_,i)=>i);
export default function GestaltLab({kind='proximity',central=false}){
  const {t,l}=useLearning();const [active,setActive]=useState(kind),[s,setS]=useState(defaults);const id=useId().replaceAll(':','');
  const set=(key,value)=>setS(old=>({...old,[key]:value}));
  const topic=gestaltTopics.find(item=>item.experiment===active)||gestaltTopics[0];
  const range=(key,label,min,max)=> <Range name={t(label)} value={s[key]} onChange={value=>set(key,value)} min={min} max={max}/>;
  let controls,canvas;
  if(active==='proximity')controls=<>{range('x','horizontalGap',22,105)}{range('y','verticalGap',22,75)}</>;
  if(active==='similarity')controls=<Choice name={t('similarBy')} value={s.similar} onChange={value=>set('similar',value)} options={['color','shape','size','orientation'].map(key=>[key,t(key)])}/>;
  if(active==='closure')controls=range('complete','completeness',10,100);
  if(active==='continuity')controls=<>{range('curve','curvature',-100,100)}{range('position','position',-70,70)}</>;
  if(active==='figure')controls=<>{range('contrast','contrast',0,100)}{range('brightness','brightness',0,100)}{range('blur','blur',0,8)}<ColorInput name={t('foreground')} value={s.fg} onChange={value=>set('fg',value)}/><ColorInput name={t('background')} value={s.bg} onChange={value=>set('bg',value)}/></>;
  if(active==='region')controls=<Toggle name={t('containers')} value={s.containers} onChange={value=>set('containers',value)}/>;
  if(active==='connected')controls=<Toggle name={t('connections')} value={s.connections} onChange={value=>set('connections',value)}/>;
  if(active==='fate')controls=<><Toggle name={t('movement')} value={s.playing} onChange={value=>set('playing',value)}/><p className="caption">{t('motionNote')}</p></>;
  if(['proximity','similarity','region','connected','fate'].includes(active)){
    canvas=<>{active==='region'&&s.containers&&[0,1].map(i=><rect key={i} x={50+i*205} y="60" width="140" height="185" rx="12" fill="#d9ff6810" stroke="#d9ff68"/>)}{active==='connected'&&s.connections&&[0,1,2].map(i=><path key={i} d={`M 150 ${95+i*60} H 285`} stroke="#d9ff68" strokeWidth="3"/>)}{rows.map(i=>{const group=Math.floor(i/9),j=i%9,x=active==='proximity'?40+(j%3)*26+group*(78+s.x):75+(j%3)*42+group*205,y=active==='proximity'?60+Math.floor(j/3)*s.y:95+Math.floor(j/3)*60;const alt=i%3===0;return <g key={i} className={active==='fate'&&s.playing?'moving-cue':''} style={{'--direction':group?' -20px':'20px'}}>{active==='similarity'&&s.similar==='shape'&&alt?<rect x={x-10} y={y-10} width="20" height="20" fill="#d9ff68"/>:active==='similarity'&&s.similar==='orientation'?<rect x={x-13} y={y-4} width="26" height="8" fill="#d9ff68" transform={`rotate(${alt?60:0} ${x} ${y})`}/>:<circle cx={x} cy={y} r={active==='similarity'&&s.similar==='size'&&alt?15:9} fill={active==='similarity'&&s.similar==='color'&&alt?'#f5a87e':'#d9ff68'}/>} {active==='fate'&&<text x={x} y={y+25} textAnchor="middle" fill="#b2b9ac" fontSize="16">{group?'←':'→'}</text>}</g>;})}</>;
  }else if(active==='closure')canvas=<>{[0,1].map(i=><circle key={i} cx={130+i*185} cy="155" r="65" fill="none" stroke="#d9ff68" strokeWidth="12" strokeDasharray={`${408*s.complete/400} ${408*(100-s.complete)/400}`} transform={`rotate(${i?20:-30} ${130+i*185} 155)`}/>)}</>;
  else if(active==='continuity')canvas=<><path d={`M 35 90 C 120 ${90+s.curve} 280 ${220-s.curve} 405 230`} stroke="#d9ff68" strokeWidth="5" fill="none"/><path d={`M 35 ${230+s.position} C 130 ${230-s.curve} 290 ${90+s.curve} 405 ${90+s.position}`} stroke="#f5a87e" strokeWidth="5" fill="none"/></>;
  else canvas=<><defs><filter id={id}><feGaussianBlur stdDeviation={s.blur}/></filter></defs><rect x="20" y="20" width="400" height="280" fill={s.bg}/><rect x="20" y="20" width="400" height="280" fill={s.brightness>50?'white':'black'} opacity={Math.abs(s.brightness-50)/130}/><path d="M 90 45 C 215 70 125 105 205 150 C 125 195 215 250 90 275 L 350 275 C 225 250 315 195 235 150 C 315 105 225 70 350 45 Z" fill={s.fg} opacity={s.contrast/100} filter={`url(#${id})`}/></>;
  return <LabFrame title={t('gestaltLab')} onReset={()=>setS(defaults)} controls={<>{central&&<Choice name={t('subtopics')} value={active} onChange={value=>{setActive(value);setS(defaults);}} options={gestaltTopics.map(item=>[item.experiment,l(item.title)])}/>}<p className="caption">{l(topic.shortDefinition)}</p>{controls}</>} footer={<><p>{l(topic.reflectionQuestions[0])}</p>{active==='proximity'&&<p>{t('proximityReflection')}</p>}{active==='figure'&&<p>{t('reversible')}</p>}</>}><svg viewBox="0 0 440 320" role="img" aria-label={l(topic.title)}>{canvas}</svg></LabFrame>;
}
