'use client';
import { useId, useState } from 'react';
import { useLearning } from './LearningProvider';
import dynamic from 'next/dynamic';
const HierarchyLab=dynamic(()=>import('./labs/HierarchyLab'));
const FocalLab=dynamic(()=>import('./labs/CompositionLabs').then(module=>module.FocalLab));
const ContrastLab=dynamic(()=>import('./labs/CompositionLabs').then(module=>module.ContrastLab));
const ThirdsLab=dynamic(()=>import('./labs/CompositionLabs').then(module=>module.ThirdsLab));
const AlignmentLab=dynamic(()=>import('./labs/CompositionLabs').then(module=>module.AlignmentLab));
const SpaceLab=dynamic(()=>import('./labs/CompositionLabs').then(module=>module.SpaceLab));
const GestaltLab=dynamic(()=>import('./labs/GestaltLab'));
const ColorLab=dynamic(()=>import('./labs/ColorLab'));
const TypographyLab=dynamic(()=>import('./labs/TypographyLab'));
const range=(n)=>Array.from({length:n},(_,i)=>i);
export function Diagram({theory,value=65,playing=false}) {
  const {l,language}=useLearning();const id=useId();
  const kind=theory.experiment;const tone=theory.color||'#d9ff68';
  const event=language==='id'?'Bentuk & Makna':'Shape & Meaning';
  let drawing;
  if(['proximity','similarity','region','connected','fate'].includes(kind)) {
    const gap=12+value*.55;
    const dots=range(18).map(i=>{const group=i<9?0:1,j=i%9,x=65+(j%3)*24+group*(72+gap),y=75+Math.floor(j/3)*28;const different=kind==='similarity'&&i%3===0;
      return <g key={i} className={kind==='fate'&&playing?'moving-cue':''} style={kind==='fate'?{'--direction':i<9?'18px':'-18px'}:undefined}><circle cx={x} cy={y} r={different?7+value*.04:8} fill={different?`hsl(${value*3.6} 55% 70%)`:tone}/>{kind==='fate'&&<text x={x-5} y={y+27} fill="#ccc" fontSize="13">{i<9?'→':'←'}</text>}</g>;});
    drawing=<>{kind==='region'&&<rect x="53" y="58" width="82" height="92" rx="4" fill={tone} fillOpacity={value/200} stroke={tone} strokeOpacity={value/100}/>} {kind==='connected'&&range(3).map(i=><path key={i} d={`M 90 ${75+i*28} L ${65+72+gap} ${75+i*28}`} stroke={tone} strokeWidth={1+value*.035} opacity={value/100}/>)}{dots}</>;
  } else if(kind==='closure') {
    const gap=150-value*1.3;
    drawing=<circle cx="180" cy="108" r="60" fill="none" stroke={tone} strokeWidth="15" strokeDasharray={`${377-gap} ${gap}`} transform="rotate(-55 180 108)"/>;
  } else if(kind==='continuity') {
    drawing=<>{range(10).map(i=><circle key={i} cx={50+i*28} cy={110+Math.sin(i*.6)*38+(i%2?(100-value)*.55:0)} r="7" fill={tone}/>)}<path d="M 50 110 Q 120 190 190 100 T 302 80" fill="none" stroke={tone} strokeWidth="1" opacity={value/150}/></>;
  } else if(kind==='color') {
    const hue=Math.round(value*3.6);
    drawing=<>{[hue,(hue+180)%360].map((h,i)=><g key={i}><rect x={35+i*147} y="45" width="145" height="125" fill={`hsl(${h} 65% 70%)`}/><text x={105+i*147} y="146" textAnchor="middle" fill="#171717" fontSize="18">{h}°</text></g>)}<text x="180" y="198" textAnchor="middle" fill="#aaa" fontSize="13">HSL · {language==='id'?'pasangan complementary':'complementary pair'}</text></>;
  } else if(['hierarchy','emphasis'].includes(kind)) {
    drawing=<><text x="30" y="87" fill={tone} fontSize={kind==='hierarchy'?22+value*.23:38} fontWeight={kind==='emphasis'?300+value*5:700}>{event}</text><text x="30" y="133" fill="#ecebe5" fontSize="21">24 OCT · 10.00</text><text x="30" y="168" fill="#aaa" fontSize="14">STUDIO 02</text></>;
  } else if(kind==='focus') {
    const count=1+Math.floor((100-value)*.08);
    drawing=<>{range(9).map(i=><circle key={i} cx={115+(i%3)*65} cy={52+Math.floor(i/3)*55} r="17" fill={[4,0,8,2,6,1,7,3,5].indexOf(i)<count?tone:'#414141'}/>)}</>;
  } else if(kind==='contrast') {
    const gray=Math.round(220-value*1.85);
    drawing=<><rect x="25" y="35" width="310" height="150" fill="#f3f2e9"/><text x="48" y="105" fill={`rgb(${gray} ${gray} ${gray})`} fontSize="33" fontWeight="700">{language==='id'?'Pesan yang jelas.':'A clear message.'}</text><text x="48" y="145" fill={`rgb(${gray} ${gray} ${gray})`} fontSize="16">{language==='id'?'Periksa teks dan latarnya.':'Check the text and its background.'}</text></>;
  } else if(kind==='thirds') {
    drawing=<><rect x="25" y="25" width="310" height="180" fill="#282d29"/>{[1,2].map(i=><g key={i}><path d={`M ${25+310*i/3} 25 V 205 M 25 ${25+180*i/3} H 335`} stroke="#b4c4af" strokeWidth="1" strokeDasharray="4 4"/></g>)}<circle cx={180-value*.515} cy="85" r="28" fill={tone}/><rect x="185" y="135" width="100" height="7" fill="#ddd"/><rect x="185" y="152" width="70" height="4" fill="#888"/></>;
  } else if(kind==='grid') {
    const count=2+Math.floor(value*.045),width=290/count;
    drawing=<>{range(count).map(i=><g key={i}><rect x={35+i*width} y="35" width={width-8} height="155" fill={tone} fillOpacity=".08" stroke={tone} strokeOpacity=".45"/><rect x={38+i*width} y={55+(i%2)*20} width={width-14} height="35" fill={tone} fillOpacity=".65"/></g>)}</>;
  } else if(kind==='alignment') {
    const shift=(100-value)*.55;
    drawing=<><path d="M 44 35 V 195" stroke={tone} strokeDasharray="3 5"/>{[190,240,150].map((width,i)=><rect key={i} x={44+shift*[1,.3,.7][i]} y={50+i*48} width={width} height={i?18:30} fill={tone} fillOpacity={1-i*.25}/>)}</>;
  } else if(kind==='space') {
    const margin=8+value*.45;
    drawing=<><rect x="35" y="25" width="290" height="180" fill="#e6dfd1"/><text x={35+margin} y={70+margin*.6} fill="#24231c" fontSize="27" fontFamily="Georgia" fontStyle="italic">{language==='id'?'Ruang untuk':'Room for'}</text><text x={35+margin} y={110+margin*.6} fill="#24231c" fontSize="27" fontFamily="Georgia" fontStyle="italic">{language==='id'?'sebuah ide.':'an idea.'}</text></>;
  } else if(['balance','scale','weight'].includes(kind)) {
    const r=kind==='weight'?39:kind==='scale'?15+value*.44:16+value*.39;
    drawing=<><path d="M 40 190 H 320" stroke="#777"/><circle cx="110" cy="110" r="42" fill={tone}/><circle cx="250" cy="110" r={r} fill={kind==='weight'?tone:'#232323'} fillOpacity={kind==='weight'?value/100:1} stroke={tone} strokeWidth="2"/></>;
  } else if(kind==='proportion') {
    const width=50+value*1.8;
    drawing=<><rect x="30" y="35" width="300" height="160" fill="#282828"/><rect x="30" y="35" width={width} height="160" fill={tone}/>{range(4).map(i=><rect key={i} x={40+width} y={65+i*25} width={Math.max(10,270-width)} height="6" fill="#aaa"/>)}</>;
  } else if(['rhythm','repetition'].includes(kind)) {
    drawing=<>{range(6).map(i=><circle key={i} cx={55+i*50} cy="110" r={kind==='rhythm'?12+(i*value*.045):18} fill={kind==='repetition'&&i%2?`hsl(${120+value*1.3} 50% 70%)`:tone} opacity={kind==='repetition'&&value<30?.4+(i%3)*.25:1}/>)}</>;
  } else if(kind==='typography') {
    const leading=22+value*.25;
    const lines=language==='id'?['Desain memberi ruang','untuk gagasan bertemu.','Setiap baris mengajak','mata terus membaca.']:['Design makes room','for ideas to meet.','Each line invites','the eye to keep reading.'];
    drawing=<>{lines.map((line,i)=><text key={line} x="38" y={43+i*leading} fill={i? '#ddd':tone} fontSize="20">{line}</text>)}</>;
  } else if(kind==='figure') {
    const gray=Math.round(55+value*1.6);
    drawing=<><rect x="35" y="30" width="290" height="170" fill={`rgb(${gray} ${gray} ${gray})`}/><path d="M180 65 230 155 130 155Z" fill="#343434"/></>;
  } else if(kind==='density') {
    const count=3+Math.floor((100-value)*.11);
    drawing=<><text x="32" y="48" fill={tone} fontSize="24" fontWeight="700">{event}</text>{range(count).map(i=><rect key={i} x={32+(i%2)*155} y={75+Math.floor(i/2)*17} width={i%3?115:135} height="6" fill={i<2?'#ddd':'#666'}/>)}</>;
  } else if(kind==='consistency') {
    drawing=<>{range(3).map(i=><g key={i}><rect x={25+i*106} y="40" width="96" height="145" fill="#262626" stroke="#4d4d4d"/><rect x={36+i*106} y="54" width={value>50?70:45+i*10} height={value>50?9:5+i*3} fill={value>50?tone:['#eb9278','#bfa3ec','#a2c6dd'][i]}/><circle cx={72+i*106} cy="113" r={17+i*3} fill={value>50?tone:['#a8cfb5','#eec68a','#cba5cb'][i]}/><path d={`M ${36+i*106} 153 h 65 M ${36+i*106} 167 h 45`} stroke="#aaa" strokeWidth="4"/></g>)}</>;
  }
  return <svg className="theory-diagram" viewBox="0 0 360 230" role="img" aria-labelledby={id}><title id={id}>{`${l(theory.title)} — ${l(theory.control)}: ${Math.round(value)}%`}</title>{drawing}</svg>;
}
export default function VisualExperiment({theory,initial=65,value:controlled,onChange,compact=false}) {
  const {t,l}=useLearning();const [ownValue,setValue]=useState(initial),[playing,setPlaying]=useState(false);const id=useId();
  const value=controlled??ownValue;
  const update=next=>{setValue(next);onChange?.(next);};
  if(!compact&&controlled===undefined){
    if(theory.slug==='gestalt')return <GestaltLab central/>;
    if(theory.slug.startsWith('gestalt/'))return <GestaltLab kind={theory.experiment}/>;
    const labs={hierarchy:HierarchyLab,focus:FocalLab,contrast:ContrastLab,thirds:ThirdsLab,alignment:AlignmentLab,space:SpaceLab,color:ColorLab,typography:TypographyLab};
    const RichLab=labs[theory.experiment];if(RichLab)return <RichLab/>;
  }
  return <div className={`experiment ${compact?'compact':''}`} style={{'--theory-accent':theory.color}}><div className="experiment-bar"><span>{t('experiment')}</span><button onClick={()=>update(initial)}>{t('reset')} ↺</button></div><Diagram theory={theory} value={value} playing={playing}/><div className="experiment-controls"><label htmlFor={id}>{l(theory.control)} <output>{Math.round(value)}%</output></label><input id={id} type="range" min="0" max="100" value={value} onChange={event=>update(Number(event.target.value))}/>{theory.experiment==='fate'&&<><button aria-pressed={playing} onClick={()=>setPlaying(!playing)}>{playing?t('pause'):t('play')}</button><p className="caption">{t('motionNote')}</p></>}{!compact&&<p className="caption">{t('experimentHint')}</p>}</div></div>;
}
export function CompareExamples({theory}) {
  const {t,l}=useLearning();
  return <div className="comparison"><figure><figcaption><span>A</span> {t('weak')}</figcaption><Diagram theory={theory} value={10}/><p>{l(theory.weak)}</p></figure><figure><figcaption><span>B</span> {t('strong')}</figcaption><Diagram theory={theory} value={85}/><p>{l(theory.strong)}</p></figure></div>;
}
