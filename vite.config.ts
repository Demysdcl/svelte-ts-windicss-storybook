import { sveltekit } from '@sveltejs/kit/vite'
import * as path from 'path'
import type { UserConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
	plugins: [sveltekit(), WindiCSS()],
	resolve: {
		alias: {
			'~': path.resolve('./src/lib')
		}
	}
}

export default config
