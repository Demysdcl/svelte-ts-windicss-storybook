<script lang="ts">
	import * as MaterialIcons from '@mdi/js'
	import type { IconsType } from '../shared/types'

	export let name: IconsType
	export let size: number | string = 16
	export let color: string = 'currentColor'

	const width = typeof size === 'string' ? size : `${Number(size) / 16}rem`

	const path = MaterialIcons[name]
</script>

<svg
	viewBox="0 0 24 24"
	{width}
	height={width}
	fill={color}
	class="align-middle"
>
	<path d={path} />
</svg>
