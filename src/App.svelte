<script>
	import SearchComp from './lib/SearchComp.svelte';
	import Clock from './lib/Clock.svelte';
	import Background from './lib/Background.svelte';

</script>

<div id="app">
	<Background />
	<Clock />
	<SearchComp />
</div>

<style>
	:global(body) {
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	:global(*) {
		font-family: "SF Pro", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(img, svg) {
		user-select: none;
	}

	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background-color: transparent;
	}
</style>