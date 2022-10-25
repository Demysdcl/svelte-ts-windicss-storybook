const { mergeConfig } = require('vite')
const preprocess = require('svelte-preprocess')

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

		return mergeConfig(config, {
			resolve: defaultConfig.resolve,
		})
	},
}
