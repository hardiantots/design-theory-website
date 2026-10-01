'use client';
// Adapted from Future AI City's lazy scene, CameraFit, boundary and DOM label pattern.
import {Component,useLayoutEffect,useRef,useState} from 'react';
import {Canvas,useThree} from '@react-three/fiber';
import {Html,OrbitControls} from '@react-three/drei';
import {categories} from '../../content/shared';
function Box({position=[0,0,0],size=[1,1,1],color='#555'}){return <mesh position={position}><boxGeometry args={size}/><meshStandardMaterial color={color} roughness={.9}/></mesh>;}
function Landmark({category,selected,onSelect,label,portal}){const [hover,setHover]=useState(false);const color=hover||selected?category.color:'#6c716b';const id=category.id;
  return <group position={category.position} onClick={event=>{event.stopPropagation();onSelect(category.id);}} onPointerOver={event=>{event.stopPropagation();setHover(true);}} onPointerOut={()=>setHover(false)}>
    <Box position={[0,.05,0]} size={[3.65,.2,3.4]} color={selected?'#303a25':'#292d29'}/>
    {id==='perception'&&Array.from({length:6},(_,i)=><Box key={i} size={[.55,.7,.55]} position={[-.85+(i%3)*.65,.5,(i<3?-.7:.7)]} color={color}/>)}
    {id==='hierarchy'&&[.7,1.4,2.1].map((height,i)=><Box key={i} size={[.7,height,.9]} position={[-.85+i*.85,height/2+.2,0]} color={color}/>)}
    {id==='composition'&&Array.from({length:6},(_,i)=><Box key={i} size={[.8,.15+(i%3)*.35,.7]} position={[-.9+(i%3)*.9,.35,(i<3?-.6:.6)]} color={color}/>)}
    {id==='color'&&['#f4ac83','#c8b4ee','#add3b8'].map((fill,i)=><mesh key={i} position={[-.9+i*.9,.8,0]}><cylinderGeometry args={[.38,.38,1.3,20]}/><meshStandardMaterial color={fill} roughness={.85}/></mesh>)}
    {id==='typography'&&<><Box size={[2.4,.45,.6]} position={[0,1.8,0]} color={color}/><Box size={[.5,1.6,.6]} position={[0,.9,0]} color={color}/></>}
    {id==='systems'&&Array.from({length:3},(_,i)=><mesh key={i} position={[-1+i,1,0]}><torusGeometry args={[.55,.12,8,24]}/><meshStandardMaterial color={color} roughness={.9}/></mesh>)}
    <Html portal={portal} position={[0,2.6,0]} center zIndexRange={[2,1]} style={{pointerEvents:'none'}}><span className={`district-label ${selected?'selected':''}`}>{label}</span></Html>
  </group>;
}
function CameraFit({resetKey}){const {camera,size}=useThree();useLayoutEffect(()=>{const aspect=size.width/size.height,distance=Math.max(19,17/Math.min(aspect,1.1));camera.position.set(distance*.4,distance*.8,distance*.8);camera.lookAt(0,.4,0);camera.updateProjectionMatrix();},[camera,size.width,size.height,resetKey]);return null;}
class SceneBoundary extends Component{state={failed:false};static getDerivedStateFromError(){return {failed:true};}render(){return this.state.failed?<div className="scene-fallback">{this.props.fallback}</div>:this.props.children;}}
export default function TheoryCity({selected,onSelect,labels,resetKey=0,fallback}){const portal=useRef();return <><div className="scene-label-portal" ref={portal}/><SceneBoundary fallback={fallback}><Canvas frameloop="demand" dpr={[1,1.5]} camera={{position:[8,18,18],fov:43,near:.1,far:100}} fallback={<div className="scene-fallback">{fallback}</div>}><color attach="background" args={['#141814']}/><ambientLight intensity={1.6}/><directionalLight position={[3,12,5]} intensity={2}/><Box position={[0,-.2,0]} size={[18,.2,14]} color="#1e231f"/><Box position={[0,-.04,0]} size={[17,.05,.9]} color="#464d3e"/>{[-2.5,2.5].map(x=><Box key={x} position={[x,-.035,0]} size={[.7,.05,12]} color="#464d3e"/>)}{categories.map(category=><Landmark key={category.id} category={category} selected={selected===category.id} onSelect={onSelect} label={labels[category.id]} portal={portal}/>)}<CameraFit resetKey={resetKey}/><OrbitControls enablePan={false} minDistance={14} maxDistance={55} minPolarAngle={Math.PI/5} maxPolarAngle={Math.PI/2.8} target={[0,.4,0]}/></Canvas></SceneBoundary></>;}
