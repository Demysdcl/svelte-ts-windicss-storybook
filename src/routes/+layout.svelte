<script>
	import 'virtual:windi.css'
	import Header from './Header.svelte'
	import './styles.css'
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-1 flex flex-col p-xxxs w-full max-w-[64rem] mx-auto box-border">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-xxxs">
		<p>
			visit <a class="font-bold py-xxxs sm:py-[0]" href="https://kit.svelte.dev">kit.svelte.dev</a> to
			learn SvelteKit
		</p>
	</footer>
</div>
