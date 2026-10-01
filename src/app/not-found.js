'use client';
import Link from 'next/link';
import {useLearning} from '../components/LearningProvider';
export default function NotFound(){const {t}=useLearning();return <section className="page-intro"><p className="eyebrow">404</p><h1>{t('notFound')}</h1><Link className="primary-button" href="/">{t('backHome')}</Link></section>;}
