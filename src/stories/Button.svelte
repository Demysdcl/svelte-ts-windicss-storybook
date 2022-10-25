<script>
	import './button.css'
	export let primary = false

	export let backgroundColor

	export let size = 'medium'

	export let label = ''

	let mode = primary
		? 'bg-primary-main text-neutral-lighter'
		: 'storybook-button--secondary'

	let style = backgroundColor ? `background-color: ${backgroundColor}` : ''
</script>

<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
	{style}
	on:click
>
	{label}
</button>
