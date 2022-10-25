import { sveltekit } from '@sveltejs/kit/vite'
import * as path from 'path'
import WindiCSS from 'vite-plugin-windicss'

const config = {
	plugins: [sveltekit(), WindiCSS()],
	resolve: {
		alias: {
			'~': path.resolve('./src/lib'),
		},
	},
}

export default config
