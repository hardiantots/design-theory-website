import './globals.css';
import localFont from 'next/font/local';
import { LearningProvider } from '../components/LearningProvider';
import StudioShell from '../components/StudioShell';
const inter=localFont({src:[{path:'./fonts/InterVariable.woff2',weight:'100 900',style:'normal'},{path:'./fonts/InterVariable-Italic.woff2',weight:'100 900',style:'italic'}],variable:'--font-inter',display:'swap',fallback:['Arial','Helvetica','sans-serif']});
export const metadata={title:{default:'Design Theory City',template:'%s · Design Theory City'},description:'An interactive bilingual design reference for grades 9–12. Explore, compare and experiment with design principles in Indonesian and English.',icons:{icon:'/icon.svg'}};
export default function RootLayout({children}) {return <html lang="id" className={inter.variable} data-scroll-behavior="smooth"><body><LearningProvider><StudioShell>{children}</StudioShell></LearningProvider></body></html>;}
