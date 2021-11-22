import { handle } from '../utils/handlebars.js';

export const getIndex = async (ctx) => {
	ctx.response.body = await handle.renderView('index', { name: 'Nate' });
};

