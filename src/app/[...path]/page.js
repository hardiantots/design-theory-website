import SitePage from '../../components/SitePage';
import { routes } from '../../lib/routes';
import { allTheories } from '../../lib/search';
export const dynamicParams=false;
export function generateStaticParams(){return routes.map(route=>({path:route.split('/')}));}
export async function generateMetadata({params}) {const {path}=await params;const route=path.join('/');const item=allTheories.find(theory=>`theory/${theory.slug}`===route);return {title:item?`${item.title.id} / ${item.title.en}`:route.split('/').at(-1).replaceAll('-',' ')};}
export default async function Page({params}) {const {path}=await params;return <SitePage route={path.join('/')}/>;}
