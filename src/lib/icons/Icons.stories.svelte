<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import Icons from './Icons.svelte'
</script>

<Meta title="Icons" component={Icons} />

<Template let:args>
	<Icons {...args} />
</Template>

<Story name="Rounded" args={{ name: 'mdiHome' }} />
