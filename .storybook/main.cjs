const { mergeConfig } = require('vite')
const preprocess = require('svelte-preprocess')
const WindiCSS = require('vite-plugin-windicss').default
const path = require('path')

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite',
	},
	svelteOptions: {
		preprocess: preprocess({
			typescript: true,
			postcss: true,
			sourceMap: true,
		}),
	},
	features: {
		storyStoreV7: false,
	},
	async viteFinal(config) {
		const defaultConfig = (await import('../vite.config.js')).default
		config.plugins = config.plugins ?? []
		config.plugins.push(
			WindiCSS({
				config: path.join(__dirname, '..', 'windi.config.ts'), // that was my missing piece
			}),
		)

		return mergeConfig(config, {
			resolve: defaultConfig.resolve,
		})
	},
}
