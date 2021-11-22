import { Application } from 'https://deno.land/x/oak/mod.ts'
import { router } from './routes/routes.js';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// app.use( async (ctx) => { ctx.response.body = 'whats up'; });

console.log(`listening on port 8000...`);
await app.listen({ port: 8000 });
