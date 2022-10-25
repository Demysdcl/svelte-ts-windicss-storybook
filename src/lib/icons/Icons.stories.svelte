<script lang="ts">
	import * as MaterialIcons from '@mdi/js'
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import Icons from './Icons.svelte'

	const argTypes = {
		color: {
			control: 'color',
		},
		name: {
			control: 'select',
			type: 'string',
			options: Object.keys(MaterialIcons),
			description: Object.keys(MaterialIcons).join(', '),
		},
	}
</script>

<Meta title="lib/Icons" component={Icons} {argTypes} />

<Template let:args>
	<Icons {...args} />
</Template>

<Story name="Default" args={{ name: 'mdiHome' }} />
