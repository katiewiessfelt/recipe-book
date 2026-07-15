import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit()
	],

	css: {
		preprocessorOptions: {
			less: {
				additionalData: `@import "${resolve('src/lib/styles/variables.less')}";
								 @import "${resolve('src/lib/styles/fonts.less')}";`,
				javascriptEnabled: true
			}
		}
	}
});