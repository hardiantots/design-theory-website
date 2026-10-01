import { theories } from '../content/theories/index.js';
import { gestaltTopics } from '../content/theories/gestalt.js';
export const pageRoutes=['explore','theory','playground','challenges','challenges/design-detective','reference','glossary'];
export const routes=[...pageRoutes,...[...theories,...gestaltTopics].map(item=>`theory/${item.slug}`)];
