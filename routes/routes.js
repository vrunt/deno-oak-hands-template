import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getIndex } from '../controllers/indexControllers.js';

export const router = new Router();

router.get('/', getIndex);

console.log('router set up');
