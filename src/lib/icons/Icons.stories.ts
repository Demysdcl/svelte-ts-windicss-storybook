import * as MaterialIcons from '@mdi/js'
import type { IconsType } from '~/shared/types'
import Icons from './Icons.svelte'

export default {
	title: 'Component/Icons',
	component: Icons,
	argTypes: {
		color: { control: 'color' },
		name: {
			control: { type: 'select' },
			options: Object.keys(MaterialIcons),
		},
		size: { control: 'number' },
	},
}

const Template = (args: {
	name: IconsType
	size?: number
	color?: string
}) => ({
	Component: Icons,
	props: args,
})

export const Default = Template.bind({})
Default.args = {
	name: 'mdiHome',
}
